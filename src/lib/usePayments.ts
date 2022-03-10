import { useEffect, useState } from "react";
import { Payment } from "./payment";
import { AbstractBackend } from "./backend";

export default function usePayments(backendProvider: () => Promise<AbstractBackend>) {
    const [payments, setPayments] = useState<Array<Payment>>([]);
    useEffect(() => {
        (async function getPayments() {
            const backend = await backendProvider();
            if (backend) {
                const paymentsResponse = await backend.request("get", "/payments");
                setPayments(
                    paymentsResponse.data.map((original: any) => {
                        return {
                            ...original,
                            dateParsed: new Date(original.date),
                        };
                    }),
                );
            }
        })();
    }, [backendProvider]);
    return payments;
}
