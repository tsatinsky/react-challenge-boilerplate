import React, {useCallback} from "react";
import {Payment} from "../lib/payment";
import {getInstrumentName} from "./paymentStrings";
import Panel from "./design/Panel";

export interface PaymentTableProps {
    payments: Array<Payment>,
    onPaymentClick(payment: Payment): void,
}

const PaymentsTable: React.FC<PaymentTableProps> = ({ payments, onPaymentClick }) => {
    const handlePaymentClick = useCallback((payment) => {
        onPaymentClick(payment);
    }, [onPaymentClick])
    return (
        <Panel>
            <tbody>
            {
                payments.map((payment) => (
                    <tr onClick={() => handlePaymentClick(payment)} key={payment.id}>
                        <td>{payment.amount}</td>
                        <td>{payment.currencyCode}</td>
                        <td>{payment.status}</td>
                        <td>{payment.processor}</td>
                        <td>{getInstrumentName(payment.paymentInstrument.paymentInstrumentData)}</td>
                        <td>{payment.orderId}</td>
                        <td>{payment.date}</td>
                    </tr>
                ))
            }
            </tbody>
        </Panel>
    )
}

export default PaymentsTable;