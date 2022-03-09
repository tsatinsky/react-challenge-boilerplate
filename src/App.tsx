import styled from 'styled-components';

import {useCallback, useEffect, useState} from "react";
import getBackend from "./lib/backendProvider";
import {Payment} from "./lib/payment";
import PaymentsList from "./components/PaymentsList";
import PaymentDetail from "./components/PaymentDetail";
import {Text} from "./components/design/Typography";

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
                setPayments(paymentsResponse.data.data.map((original: any) => {
                    return {
                        ...original,
                        dateParsed: new Date(original.date),
                    }
                }));
            }
        })();
    }, []);

    const handleBackClick = useCallback(() => setCurrentPayment(undefined), []);

    return (
        <AppWrapper>
            {payments.length === 0 && <Text>Loading...</Text>}
            {!currentPayment && payments.length!== 0 && <PaymentsList payments={payments} onPaymentClick={(p) => setCurrentPayment(p)}/>}
            {currentPayment && <PaymentDetail payment={currentPayment} onBackClick={handleBackClick}/>}
        </AppWrapper>
    );
}

export default App;
