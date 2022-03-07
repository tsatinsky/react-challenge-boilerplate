import {isPaymentCardInstrumentData, isPaypalOrderInstrumentData, PaymentInstrumentData} from "../lib/payment";

export function getInstrumentName(paymentInstrumentData: PaymentInstrumentData) {
    if (isPaymentCardInstrumentData(paymentInstrumentData)) {
        return "Card"
    }
    if (isPaypalOrderInstrumentData(paymentInstrumentData)) {
        return "Paypal"
    }
    return "Unknown";
}
