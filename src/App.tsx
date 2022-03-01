import styled from 'styled-components';

import logo from './assets/logo.png'
import {useEffect, useState} from "react";
import getBackend from "./lib/backendProvider";

const AppWrapper = styled.div`
  margin: 2rem auto;
  padding: 2rem;
  max-width: 300px;

  border: 1px #000 solid;
  border-radius: 6px;

  text-align: center;

  & > p {
    margin: 1rem 0 0 0;
  }
`;

function App() {
    const [payments, setPayments] = useState<any>();

    useEffect(() => {
        async function getPayments() {
            const backend = await getBackend();
            if (backend) {
                const paymentsResponse = await backend.request("get", "/payments");
                setPayments(paymentsResponse);
            }

        }
        getPayments()
    }, []);

    return (
        <AppWrapper>
            <img src={logo} alt='Primer logo' width="128" height="128"/>
            <p>Primer React Challenge Boilerplate</p>
            <pre>
                {JSON.stringify(payments)}
            </pre>
        </AppWrapper>
    );
}

export default App;
