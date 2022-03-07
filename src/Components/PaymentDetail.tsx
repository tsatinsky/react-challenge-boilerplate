import React from "react";
import {isPaymentCardInstrumentData, isPaypalOrderInstrumentData, Payment} from "../lib/payment";
import styled from "styled-components";
import {getInstrumentName} from "./paymentStrings";

const StyledPaymentDetail = styled.div`
  width: 100%;
  background-color: white;
  min-height: 100px;
  position: absolute;
  top: 0;
  left: 0;
`;

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
        <StyledPaymentDetail>
            <button onClick={onBackClick}>{"<- transactions"}</button><br/>
            <br/>
            <div>
                {currencyCode} {amount}
                {/*Show refund amount and total only if something was refunded*/}
                {(payment.amountRefunded !== 0) && (<>
                    {" "} Refund: {amountRefunded} Final: {amount - amountRefunded}
                </>)}
                <br/>
            </div>

            <div>
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
                <br/>
            </div>

            <div>
                Processor<br/>
                Account ID<br/>
                {processorMerchantId}<br/>
                Transaction ID<br/>
                (fetch it)<br/>
                <br/>
            </div>

            <div>
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
                <br/>
            </div>

            {
                paymentInstrument.threeDSecureAuthentication !== null && (<div>
                    3DSecure<br/>
                    Response<br/>
                    {paymentInstrument.threeDSecureAuthentication.responseCode}<br/>
                        <br/>
                    </div>
                )
            }
        </StyledPaymentDetail>
    );
}

export default PaymentDetail;