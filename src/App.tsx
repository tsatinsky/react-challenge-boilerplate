import styled from 'styled-components';

import {useEffect, useState} from "react";
import getBackend from "./lib/backendProvider";
import {Payment} from "./lib/payment";
import PaymentsTable from "./Components/PaymentsTable";

const AppWrapper = styled.div`
  margin: 2rem auto;
  max-width: 800px;
`;

function App() {
    const [payments, setPayments] = useState<Array<Payment>>([]);

    useEffect(() => {
        (async function getPayments() {
            const backend = await getBackend();
            if (backend) {
                const paymentsResponse = await backend.request("get", "/payments");
                setPayments(paymentsResponse.data.data);
            }
        })();
    }, []);

    return (
        <AppWrapper>
            <h1>Transactions</h1>
            <PaymentsTable payments={payments}/>
        </AppWrapper>
    );
}

export default App;
