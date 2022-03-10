import React from "react";
import { isPaymentCardInstrumentData, isPaypalOrderInstrumentData, Payment } from "../lib/payment";
import { getInstrumentName, capitalise, getCurrencySymbol } from "./paymentStringTools";
import Panel from "./design/Panel";
import ColumnGrid from "./design/ColumnGrid";
import GridColumn from "./design/GridColumn";
import DateTime from "./design/DateTime";
import { H2, H4, Text } from "./design/Typography";
import Button from "./design/Button";
import ProcessorIcon from "./shared/ProcessorIcon";
import PaymentStatusBadge from "./shared/PaymentStatusBadge";
import Float from "./design/Float";
import CardNetworkIcon from "./shared/CardNetworkIcon";
import ThreeDSIcon from "./shared/ThreeDSIcon";
import ThreeDSResponseBadge from "./shared/ThreeDSResponseBadge";
import Number from "./design/Number";

export interface PaymentDetailProps {
    payment: Payment;
    onBackClick(): void;
}

const PaymentDetail: React.FC<PaymentDetailProps> = ({ payment, onBackClick }) => {
    const {
        currencyCode,
        amountRefunded,
        amount,
        paymentInstrument,
        processor,
        orderId,
        status,
        processorMerchantId,
        amountCaptured,
    } = payment;
    return (
        <ColumnGrid proportions={[1, 1]}>
            <GridColumn span={2}>
                <Button onClick={onBackClick}>{"← Transactions"}</Button>
                <br />
                <br />
            </GridColumn>

            <GridColumn span={2}>
                <div>
                    <Float>
                        <Text large>
                            {getCurrencySymbol(currencyCode)} <Number value={amount} />
                        </Text>
                    </Float>
                    <Float>
                        <H4>Refund</H4>
                        <Text big dimmed>
                            {getCurrencySymbol(currencyCode)}
                            <Number value={amountRefunded} />
                        </Text>
                    </Float>
                    <Float>
                        <H4>Final</H4>
                        <Text big dimmed>
                            {getCurrencySymbol(currencyCode)}
                            <Number value={amountCaptured} />
                        </Text>
                    </Float>
                </div>
            </GridColumn>

            <GridColumn span={2}>
                <Panel data-testid="overview-panel">
                    <ColumnGrid proportions={[2, 2, 4, 6, 6, 4]}>
                        <GridColumn>
                            <H4>Currency</H4>
                            <Text bigger>{currencyCode}</Text>
                        </GridColumn>
                        <GridColumn>
                            <H4>Processor</H4>
                            <Text bigger>{capitalise(processor)}</Text>
                        </GridColumn>
                        <GridColumn>
                            <H4>Payment method</H4>
                            <Text bigger>
                                {getInstrumentName(payment.paymentInstrument.paymentInstrumentData)}
                                {isPaymentCardInstrumentData(paymentInstrument.paymentInstrumentData) && (
                                    <>
                                        {" / "} {paymentInstrument.paymentInstrumentData.network}
                                    </>
                                )}
                            </Text>
                        </GridColumn>
                        <GridColumn>
                            <H4>Your reference</H4>
                            <Text bigger>{orderId}</Text>
                        </GridColumn>
                        <GridColumn>
                            <H4>Submitted</H4>
                            <Text bigger>
                                <DateTime date={payment.dateParsed} />
                            </Text>
                        </GridColumn>
                        <GridColumn>
                            <Float direction="right">
                                <PaymentStatusBadge status={status} large={true} />
                            </Float>
                        </GridColumn>
                    </ColumnGrid>
                </Panel>
            </GridColumn>

            <GridColumn>
                <Panel data-testid="processor-panel">
                    <H2>
                        <ProcessorIcon processor={payment.processor} />
                        <span>Processor</span>
                    </H2>
                    <H4>Account ID</H4>
                    <Text bigger>{processorMerchantId}</Text>
                    {/*TODO: use styling instead*/}
                    <br />
                    <br />
                    <H4>Transaction ID</H4>
                    <Text bigger>{"Not implemented"}</Text>
                    <br />
                    <br />
                </Panel>
            </GridColumn>

            <GridColumn>
                <Panel>
                    <H2 data-testid="instrument-panel">
                        {isPaymentCardInstrumentData(payment.paymentInstrument.paymentInstrumentData) && (
                            <CardNetworkIcon
                                network={payment.paymentInstrument.paymentInstrumentData.network}
                            />
                        )}
                        {isPaypalOrderInstrumentData(payment.paymentInstrument.paymentInstrumentData) && (
                            <ProcessorIcon processor={payment.processor} />
                        )}
                        <span>Payment method</span>
                    </H2>
                    {isPaymentCardInstrumentData(paymentInstrument.paymentInstrumentData) && (
                        <>
                            <H4>Cardholder name</H4>
                            <Text bigger>{paymentInstrument.paymentInstrumentData.cardholderName}</Text>
                            <br />
                            <br />
                            <H4>Card number</H4>
                            <Text bigger>
                                •••• •••• •••• {paymentInstrument.paymentInstrumentData.last4Digits}
                            </Text>
                            <br />
                            <br />
                            <H4>Expiration</H4>
                            <Text bigger>
                                {paymentInstrument.paymentInstrumentData.expirationMonth}/
                                {paymentInstrument.paymentInstrumentData.expirationYear}
                            </Text>
                        </>
                    )}
                    {isPaypalOrderInstrumentData(paymentInstrument.paymentInstrumentData) && (
                        <>
                            <H4>Paypal order ID</H4>
                            <Text bigger>{paymentInstrument.paymentInstrumentData.paypalOrderId}</Text>
                        </>
                    )}
                </Panel>
            </GridColumn>

            {paymentInstrument.threeDSecureAuthentication !== null && (
                <GridColumn>
                    <Panel data-testid="threeDS-panel">
                        <H2>
                            <ThreeDSIcon />
                            <span>3DSecure</span>
                        </H2>
                        <H4>Response</H4>
                        <ThreeDSResponseBadge
                            status={paymentInstrument.threeDSecureAuthentication.responseCode}
                        />
                    </Panel>
                </GridColumn>
            )}
        </ColumnGrid>
    );
};

export default PaymentDetail;
