import React from "react";
import {isPaymentCardInstrumentData, isPaypalOrderInstrumentData, Payment} from "../lib/payment";

const PaymentsTable: React.FC<{payments: Array<Payment>}> = ({ payments }) => (
    <table>
        {
            payments.map((payment) => (
                <tr>
                    <td>{payment.amount}</td>
                    <td>{payment.currencyCode}</td>
                    <td>{payment.status}</td>
                    <td>{payment.processor}</td>
                    <td>
                        {isPaymentCardInstrumentData(payment.paymentInstrument.paymentInstrumentData) && "card"}
                        {isPaypalOrderInstrumentData(payment.paymentInstrument.paymentInstrumentData) && "paypal"}
                    </td>

                    <td>{payment.orderId}</td>
                    <td>{payment.date}</td>
                </tr>
            ))
        }
    </table>
)

export default PaymentsTable;