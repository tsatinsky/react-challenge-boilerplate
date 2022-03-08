import React, {useCallback} from "react";
import {Payment} from "../lib/payment";
import {getInstrumentName} from "./paymentStrings";
import Panel from "./design/Panel";
import PanelRow from "./design/PanelRow";
import Grid from "./design/Grid";
import GridRow from "./design/GridRow";
import AlignText from "./design/AlignText";

export interface PaymentsListProps {
    payments: Array<Payment>,
    onPaymentClick(payment: Payment): void,
}

const PaymentsList: React.FC<PaymentsListProps> = ({ payments, onPaymentClick }) => {
    const handlePaymentClick = useCallback((payment) => {
        onPaymentClick(payment);
    }, [onPaymentClick])
    return (
        <Panel noPadding={true}>
            {
                payments.map((payment) => (
                    <PanelRow onClick={() => handlePaymentClick(payment)} key={payment.id}>
                        <Grid proportions={[10, 15, 8, 20, 10, 5]}>
                            <GridRow>
                                <AlignText align="right">
                                    {payment.amount} {payment.currencyCode}
                                </AlignText>
                            </GridRow>
                            <GridRow>{payment.status}</GridRow>
                            <GridRow>
                                {`${payment.processor} ${getInstrumentName(payment.paymentInstrument.paymentInstrumentData)}`}
                            </GridRow>
                            <GridRow>{payment.orderId}</GridRow>
                            <GridRow>{payment.date}</GridRow>
                            <GridRow>{">"}</GridRow>
                        </Grid>

                    </PanelRow>
                ))
            }
        </Panel>
    )
}

export default PaymentsList;