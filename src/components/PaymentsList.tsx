import React, { useCallback } from "react";
import { isPaymentCardInstrumentData, Payment } from "../lib/payment";
import Panel from "./design/Panel";
import PanelRow from "./design/PanelRow";
import ColumnGrid from "./design/ColumnGrid";
import GridColumn from "./design/GridColumn";
import DateTime from "./design/DateTime";
import { H1, Text } from "./design/Typography";
import PaymentStatusBadge from "./shared/PaymentStatusBadge";
import ProcessorIcon from "./shared/ProcessorIcon";
import CardNetworkIcon from "./shared/CardNetworkIcon";
import Button from "./design/Button";

export interface PaymentsListProps {
    payments: Array<Payment>;

    onPaymentClick(payment: Payment): void;
}

const PaymentsList: React.FC<PaymentsListProps> = ({ payments, onPaymentClick }) => {
    const handlePaymentClick = useCallback(
        (payment) => {
            onPaymentClick(payment);
        },
        [onPaymentClick],
    );
    return (
        <>
            <H1>Transactions</H1>
            <Panel noPadding={true}>
                {payments.map((payment) => (
                    <PanelRow onClick={() => handlePaymentClick(payment)} key={payment.id}>
                        <ColumnGrid proportions={[7, 3, 15, 8, 20, 10, 1]}>
                            <GridColumn>
                                <Text align="right" big>
                                    {payment.amount}
                                </Text>
                            </GridColumn>
                            <GridColumn>
                                <Text bigger>{payment.currencyCode}</Text>
                            </GridColumn>
                            <GridColumn>
                                <PaymentStatusBadge status={payment.status}>
                                    {payment.status}
                                </PaymentStatusBadge>
                            </GridColumn>
                            <GridColumn>
                                <ProcessorIcon processor={payment.processor} />
                                {isPaymentCardInstrumentData(
                                    payment.paymentInstrument.paymentInstrumentData,
                                ) && (
                                    <CardNetworkIcon
                                        network={payment.paymentInstrument.paymentInstrumentData.network}
                                    />
                                )}
                            </GridColumn>
                            <GridColumn>
                                <Text>{payment.orderId}</Text>
                            </GridColumn>

                            <GridColumn>
                                <Text>
                                    <DateTime date={payment.dateParsed} />
                                </Text>
                            </GridColumn>
                            <GridColumn>
                                <Button onClick={() => handlePaymentClick(payment)}>{"〉"}</Button>
                            </GridColumn>
                        </ColumnGrid>
                    </PanelRow>
                ))}
            </Panel>
        </>
    );
};

export default PaymentsList;
