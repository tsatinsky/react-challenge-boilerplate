import React, {useCallback} from "react";
import {Payment} from "../lib/payment";
import styled from 'styled-components';
import {getInstrumentName} from "./paymentStrings";

const StyledPaymentsTable = styled.table`
    & tr{
      cursor: pointer;
    }
`;

export interface PaymentTableProps {
    payments: Array<Payment>,
    onPaymentClick(payment: Payment): void,
}

const PaymentsTable: React.FC<PaymentTableProps> = ({ payments, onPaymentClick }) => {
    const handlePaymentClick = useCallback((payment) => {
        onPaymentClick(payment);
    }, [onPaymentClick])
    return (
        <StyledPaymentsTable>
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
        </StyledPaymentsTable>
    )
}

export default PaymentsTable;