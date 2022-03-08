import React from "react";
import {isPaymentCardInstrumentData, isPaypalOrderInstrumentData, Payment} from "../lib/payment";
import {getInstrumentName} from "./paymentStrings";
import Panel from "./design/Panel";
import Grid from "./design/Grid";
import GridRow from "./design/GridRow";

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
        date,
        status,
        processorMerchantId,
    } = payment;
    return (
        <Grid proportions={[1, 1]}>
            <GridRow span={2}>
                <button onClick={onBackClick}>{"<- transactions"}</button><br/>
            </GridRow>

            <GridRow span={2}>
                <Panel>
                    {currencyCode} {amount}
                    {/*Show refund amount and total only if something was refunded*/}
                    {(payment.amountRefunded !== 0) && (<>
                        {" "} Refund: {amountRefunded} Final: {amount - amountRefunded}
                    </>)}
                </Panel>
            </GridRow>

            <GridRow span={2}>
                <Panel>
                    Currency<br/>
                    {currencyCode}<br/>
                    Processor<br/>
                    {processor}<br/>
                    Payment method<br/>
                    {getInstrumentName(payment.paymentInstrument.paymentInstrumentData)}

                    {isPaymentCardInstrumentData(paymentInstrument.paymentInstrumentData) && (<>
                        {" / "} {paymentInstrument.paymentInstrumentData.network}
                    </>)} <br/>
                    Your reference<br/>
                    {orderId}<br/>
                    Submitted<br/>
                    {date}<br/>
                    {status}<br/>
                </Panel>
            </GridRow>

            <GridRow>
                <Panel>
                    Processor<br/>
                    Account ID<br/>
                    {processorMerchantId}<br/>
                    Transaction ID<br/>
                    (fetch it)<br/>
                </Panel>
            </GridRow>

            <GridRow>
                <Panel>
                    Payment method<br/>
                    {
                        isPaymentCardInstrumentData(paymentInstrument.paymentInstrumentData) && (<>
                                Cardholder name<br/>
                                {paymentInstrument.paymentInstrumentData.cardholderName}<br/>
                                Card number<br/>
                                •••• •••• •••• {paymentInstrument.paymentInstrumentData.last4Digits}<br/>
                                Expiration<br/>
                                {paymentInstrument.paymentInstrumentData.expirationMonth}/{paymentInstrument.paymentInstrumentData.expirationYear}<br/>
                            </>
                        )
                    }
                    {
                        isPaypalOrderInstrumentData(paymentInstrument.paymentInstrumentData) && (<>
                                Paypal order ID<br/>
                                {paymentInstrument.paymentInstrumentData.paypalOrderId}<br/>
                            </>
                        )
                    }
                </Panel>
            </GridRow>

            {
                paymentInstrument.threeDSecureAuthentication !== null && (
                    <GridRow>
                        <Panel>
                            3DSecure<br/>
                            Response<br/>
                            {paymentInstrument.threeDSecureAuthentication.responseCode}<br/>
                        </Panel>
                    </GridRow>
                )
            }
        </Grid>
    );
}

export default PaymentDetail;
