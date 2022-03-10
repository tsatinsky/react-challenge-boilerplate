import { render, screen } from "@testing-library/react";
import PaymentDetail from "../PaymentDetail";
import { Payment } from "../../lib/payment";

const stripePayment: Payment = {
    id: "KZ2Gs2uA",
    date: "2021-12-02T12:52:22.585194+00:00",
    dateParsed: new Date("2021-12-02T12:52:22.585194+00:00"),
    status: "SETTLED",
    orderId: "my_order_id",
    processor: "STRIPE",
    processorMerchantId: "acct_1GORcsGZqNWFwi8c",
    currencyCode: "EUR",
    amount: 45,
    amountRefunded: 45,
    paymentInstrument: {
        paymentInstrumentType: "PAYMENT_CARD",
        paymentInstrumentData: {
            last4Digits: "4242",
            expirationMonth: "03",
            expirationYear: "2030",
            cardholderName: "John Doe",
            network: "Visa",
        },
        threeDSecureAuthentication: {
            responseCode: "NOT_PERFORMED",
        },
    },
};

describe("stripe payment detail", () => {
    test("panels overview, processor, instrument, threeDS are present", () => {
        render(<PaymentDetail payment={stripePayment} onBackClick={() => {}} />);

        ["overview", "processor", "instrument", "threeDS"].forEach((panelID) => {
            const primerElement = screen.getByTestId(`${panelID}-panel`);
            expect(primerElement).toBeInTheDocument();
        });
    });
});
