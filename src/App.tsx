import styled from 'styled-components';

import {useCallback, useEffect, useState} from "react";
import getBackend from "./lib/backendProvider";
import {Payment} from "./lib/payment";
import PaymentsTable from "./Components/PaymentsTable";
import PaymentDetail from "./Components/PaymentDetail";

const AppWrapper = styled.div`
  margin: 2rem auto;
  max-width: 1000px;
  position: relative;
`;

function App() {
    const [payments, setPayments] = useState<Array<Payment>>([]);
    const [currentPayment, setCurrentPayment] = useState<Payment | undefined>(undefined)

    useEffect(() => {
        (async function getPayments() {
            const backend = await getBackend();
            if (backend) {
                const paymentsResponse = await backend.request("get", "/payments");
                setPayments(paymentsResponse.data.data);
                // for testing setCurrentPayment(paymentsResponse.data.data[0])
            }
        })();
    }, []);

    const handleBackClick = useCallback(() => setCurrentPayment(undefined), []);

    return (
        <AppWrapper>
            <h1>Transactions</h1>
            {!currentPayment && payments.length!== 0 && <PaymentsTable payments={payments} onPaymentClick={(p) => setCurrentPayment(p)}/>}
            {currentPayment && <PaymentDetail payment={currentPayment} onBackClick={handleBackClick}/>}
        </AppWrapper>
    );
}

export default App;
