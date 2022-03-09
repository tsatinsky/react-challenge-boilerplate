import React from "react";
import {isPaymentCardInstrumentData, isPaypalOrderInstrumentData, Payment} from "../lib/payment";
import {getInstrumentName, capitalise, getCurrencySymbol} from "./paymentStrings";
import Panel from "./design/Panel";
import Grid from "./design/Grid";
import GridRow from "./design/GridRow";
import DateTime from "./design/DateTime";
import {H2, H4, Text} from "./design/Typography";
import Button from "./design/Button";
import ProcessorIcon from "./shared/ProcessorIcon";
import PaymentStatusBadge from "./shared/PaymentStatusBadge";
import Floating from "./design/Floating";
import CardNetworkIcon from "./shared/CardNetworkIcon";

export interface PaymentDetailProps {
    payment: Payment
    onBackClick():void;
}

const PaymentDetail: React.FC<PaymentDetailProps> = ({payment, onBackClick}) => {
    const {
        currencyCode,
        amountRefunded,
        amount,
        paymentInstrument,
        processor,
        orderId,
        status,
        processorMerchantId,
    } = payment;
    return (
        <Grid proportions={[1, 1]}>
            <GridRow span={2}>
                <Button onClick={onBackClick}>
                    {"← Transactions"}
                </Button>
            </GridRow>

            <GridRow span={2}>
                <div>
                    <Floating>
                        <Text large>{getCurrencySymbol(currencyCode)} {amount}</Text>
                    </Floating>
                    <Floating>
                        <H4>Refund</H4>
                        <Text big dimmed>{amountRefunded}</Text>
                    </Floating>
                    <Floating>
                        <H4>Final</H4>
                        <Text big dimmed>{amount - amountRefunded}</Text>
                    </Floating>
                </div>

            </GridRow>

            <GridRow span={2}>
                <Panel data-testid="overview-panel">
                    <Grid proportions={[2, 2, 3, 6, 6, 4]}>
                        <GridRow>
                            <H4>Currency</H4>
                            <Text bigger>{currencyCode}</Text>
                        </GridRow>
                        <GridRow>
                            <H4>Processor</H4>
                            <Text bigger>{capitalise(processor)}</Text>
                        </GridRow>
                        <GridRow>
                            <H4>Payment method</H4>
                            <Text bigger>
                                {getInstrumentName(payment.paymentInstrument.paymentInstrumentData)}
                                {isPaymentCardInstrumentData(paymentInstrument.paymentInstrumentData) && (<>
                                    {" / "} {paymentInstrument.paymentInstrumentData.network}
                                </>)}
                            </Text>
                        </GridRow>
                        <GridRow>
                            <H4>Your reference</H4>
                            <Text bigger>{orderId}</Text>
                        </GridRow>
                        <GridRow>
                            <H4>Submitted</H4>
                            <Text bigger><DateTime date={payment.dateParsed} /></Text>
                        </GridRow>
                        <GridRow>
                            <Floating float="right">
                                <PaymentStatusBadge status={status} large={true}/>
                            </Floating>
                        </GridRow>
                    </Grid>
                </Panel>
            </GridRow>

            <GridRow>
                <Panel data-testid="processor-panel">
                    <H2>
                        <ProcessorIcon processor={payment.processor} />
                        <span>Processor</span>
                    </H2>
                    <H4>Account ID</H4>
                    <Text bigger>{processorMerchantId}</Text><br/><br/>
                    <H4>Transaction ID</H4>
                    <Text bigger>{"fetch it"}</Text><br/><br/>
                </Panel>
            </GridRow>

            <GridRow>
                <Panel>
                    <H2 data-testid="instrument-panel">
                        {isPaymentCardInstrumentData(payment.paymentInstrument.paymentInstrumentData) &&
                            <CardNetworkIcon
                                network={payment.paymentInstrument.paymentInstrumentData.network}/>
                        }
                        <span>Payment method</span>
                    </H2>
                    {
                        isPaymentCardInstrumentData(paymentInstrument.paymentInstrumentData) && (<>
                                <H4>Cardholder name</H4>
                                <Text bigger>{paymentInstrument.paymentInstrumentData.cardholderName}</Text><br/><br/>
                                <H4>Card number</H4>
                                <Text bigger>•••• •••• •••• {paymentInstrument.paymentInstrumentData.last4Digits}</Text><br/><br/>
                                <H4>Expiration</H4>
                                <Text bigger>
                                    {paymentInstrument.paymentInstrumentData.expirationMonth}/
                                    {paymentInstrument.paymentInstrumentData.expirationYear}
                                </Text>
                            </>
                        )
                    }
                    {
                        isPaypalOrderInstrumentData(paymentInstrument.paymentInstrumentData) && (<>
                                <H4>Paypal order ID</H4>
                                <Text bigger>{paymentInstrument.paymentInstrumentData.paypalOrderId}</Text>
                            </>
                        )
                    }
                </Panel>
            </GridRow>

            {
                paymentInstrument.threeDSecureAuthentication !== null && (
                    <GridRow>
                        <Panel data-testid="threeDS-panel">
                            <H2>3DSecure</H2>
                            <H4>Response</H4>
                            <Text>{paymentInstrument.threeDSecureAuthentication.responseCode}</Text>
                        </Panel>
                    </GridRow>
                )
            }
        </Grid>
    );
}

export default PaymentDetail;
