import React, {useCallback} from "react";
import {isPaymentCardInstrumentData, Payment} from "../lib/payment";
import Panel from "./design/Panel";
import PanelRow from "./design/PanelRow";
import Grid from "./design/Grid";
import GridRow from "./design/GridRow";
import DateTime from "./design/DateTime";
import {H1, Text} from "./design/Typography";
import PaymentStatusBadge from "./shared/PaymentStatusBadge";
import ProcessorIcon from "./shared/ProcessorIcon";
import CardNetworkIcon from "./shared/CardNetworkIcon";
import Button from "./design/Button";

export interface PaymentsListProps {
    payments: Array<Payment>,

    onPaymentClick(payment: Payment): void,
}

const PaymentsList: React.FC<PaymentsListProps> = ({payments, onPaymentClick}) => {
    const handlePaymentClick = useCallback((payment) => {
        onPaymentClick(payment);
    }, [onPaymentClick])
    return (
        <>
            <H1>Transactions</H1>
            <Panel noPadding={true}>
                {
                    payments.map((payment) => (
                        <PanelRow onClick={() => handlePaymentClick(payment)} key={payment.id}>
                            <Grid proportions={[7, 3, 15, 8, 20, 10, 1]}>
                                <GridRow>
                                    <Text align="right" big>
                                        {payment.amount}
                                    </Text>
                                </GridRow>
                                <GridRow>
                                    <Text bigger>
                                        {payment.currencyCode}
                                    </Text>
                                </GridRow>
                                <GridRow>
                                    <PaymentStatusBadge status={payment.status}>
                                        {payment.status}
                                    </PaymentStatusBadge>
                                </GridRow>
                                <GridRow>
                                    <ProcessorIcon processor={payment.processor}/>
                                    {
                                        isPaymentCardInstrumentData(payment.paymentInstrument.paymentInstrumentData) &&
                                        <CardNetworkIcon
                                            network={payment.paymentInstrument.paymentInstrumentData.network}/>
                                    }
                                </GridRow>
                                <GridRow>
                                    <Text>
                                        {payment.orderId}
                                    </Text>
                                </GridRow>

                                <GridRow>
                                    <Text>
                                        <DateTime date={payment.dateParsed}/>
                                    </Text>
                                </GridRow>
                                <GridRow>
                                    <Button onClick={() => handlePaymentClick(payment)}>
                                        {"〉"}
                                    </Button>
                                </GridRow>
                            </Grid>

                        </PanelRow>
                    ))
                }
            </Panel>
        </>
    )
}

export default PaymentsList;