import {
    isPaymentCardInstrumentData,
    isPaypalOrderInstrumentData,
    PaymentInstrumentData,
    PaymentProcessor
} from "../lib/payment";

export function getInstrumentName(paymentInstrumentData: PaymentInstrumentData) {
    if (isPaymentCardInstrumentData(paymentInstrumentData)) {
        return "Card"
    }
    if (isPaypalOrderInstrumentData(paymentInstrumentData)) {
        return "Paypal"
    }
    return "Unknown";
}

export function capitalise(processor: PaymentProcessor) {
    const low = processor.toLowerCase();
    return low.charAt(0).toUpperCase() + low.slice(1);
}

export function getCurrencySymbol(code: string): string {
    const currencySymbols: {[code: string]: string} = {
        'USD': '$', // US Dollar
        'EUR': '€', // Euro
        'CRC': '₡', // Costa Rican Colón
        'GBP': '£', // British Pound Sterling
        'ILS': '₪', // Israeli New Sheqel
        'INR': '₹', // Indian Rupee
        'JPY': '¥', // Japanese Yen
        'KRW': '₩', // South Korean Won
        'NGN': '₦', // Nigerian Naira
        'PHP': '₱', // Philippine Peso
        'PLN': 'zł', // Polish Zloty
        'PYG': '₲', // Paraguayan Guarani
        'THB': '฿', // Thai Baht
        'UAH': '₴', // Ukrainian Hryvnia
        'VND': '₫', // Vietnamese Dong
    };
    return currencySymbols[code] || "";
}