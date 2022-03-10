import styled from "styled-components";

import { useCallback, useState } from "react";
import getStagingBackend from "./lib/backendProvider";
import { Payment } from "./lib/payment";
import PaymentsList from "./components/PaymentsList";
import PaymentDetail from "./components/PaymentDetail";
import { Text } from "./components/design/Typography";
import usePayments from "./lib/usePayments";

const AppWrapper = styled.div`
    margin: 2rem auto;
    max-width: 1000px;
    position: relative;
`;

function App() {
    const payments = usePayments(getStagingBackend);

    const [currentPayment, setCurrentPayment] = useState<Payment | undefined>(undefined);
    const handleBackClick = useCallback(() => setCurrentPayment(undefined), []);

    return (
        <AppWrapper>
            {payments.length === 0 && <Text>Loading...</Text>}
            {!currentPayment && payments.length !== 0 && (
                <PaymentsList payments={payments} onPaymentClick={(p) => setCurrentPayment(p)} />
            )}
            {currentPayment && <PaymentDetail payment={currentPayment} onBackClick={handleBackClick} />}
        </AppWrapper>
    );
}

export default App;
