import { renderHook, act } from "@testing-library/react-hooks";
import usePayments from "../usePayments";
import { AbstractBackend } from "../backend";
import { Method } from "axios";

const responsePayment = {
    id: "KZ2Gs2uA",
    date: "2021-12-02T12:52:22.585194+00:00",
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
function getFakeBackendProvider() {
    let resolveRequestPromise = (value: unknown) => {};
    let rejectRequestPromise = (value: unknown) => {};

    const requestPromise = new Promise(function (resolve, reject) {
        resolveRequestPromise = resolve;
        rejectRequestPromise = reject;
    });

    class FakeBackend implements AbstractBackend {
        authenticate(userName: string, password: string): Promise<AbstractBackend> {
            return Promise.resolve(this);
        }

        request(method: Method, path: string): Promise<any> {
            return requestPromise;
        }
    }

    async function fakeBackendProvider() {
        return new FakeBackend();
    }

    return {
        fakeBackendProvider,
        resolveRequestPromise,
        rejectRequestPromise,
    };
}

describe("usePayments", () => {
    test("returns backend response with parsed date", async () => {
        const { fakeBackendProvider, resolveRequestPromise } = getFakeBackendProvider();
        const { result } = renderHook(() => usePayments(fakeBackendProvider));

        await act(() => {
            resolveRequestPromise({
                data: [responsePayment],
            });
        });

        expect(result.current).toMatchObject([responsePayment]);
        expect(result.current[0].dateParsed.toString()).toBe(
            "Thu Dec 02 2021 13:52:22 GMT+0100 (Central European Standard Time)",
        );
    });

    test("returns empty array when malformed response comes", async () => {
        const { fakeBackendProvider, resolveRequestPromise } = getFakeBackendProvider();
        const { result } = renderHook(() => usePayments(fakeBackendProvider));

        await act(() => resolveRequestPromise({}));

        expect(result.current).toMatchObject([]);
    });

    test("returns empty array when request fails", async () => {
        const { fakeBackendProvider, rejectRequestPromise } = getFakeBackendProvider();
        const { result } = renderHook(() => usePayments(fakeBackendProvider));

        await act(() => rejectRequestPromise("err"));

        expect(result.current).toMatchObject([]);
    });
});
