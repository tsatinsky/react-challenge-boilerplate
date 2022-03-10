/**
 * Types and type guards for payment object
 */

export type CardNetwork = "Mastercard" | "Visa" | "American Express" | "other";

export interface PaymentCardInstrumentData {
    network: CardNetwork;
    cardholderName: string;
    last4Digits: string;
    expirationMonth: string;
    expirationYear: string;
}

export interface PaypalOrderInstrumentData {
    paypalOrderId: string;
}

export type PaymentInstrumentData = PaymentCardInstrumentData | PaypalOrderInstrumentData;

export function isPaymentCardInstrumentData(
    instrumentData: PaymentInstrumentData,
): instrumentData is PaymentCardInstrumentData {
    return (instrumentData as PaymentCardInstrumentData).cardholderName !== undefined;
}

export function isPaypalOrderInstrumentData(
    instrumentData: PaymentInstrumentData,
): instrumentData is PaypalOrderInstrumentData {
    return (instrumentData as PaypalOrderInstrumentData).paypalOrderId !== undefined;
}

export interface ThreeDSecureAuthentication {
    responseCode: string;
}

export type InstrumentType = "PAYMENT_CARD" | "PAYPAL_ORDER";

export interface PaymentInstrument {
    paymentInstrumentType: InstrumentType;
    paymentInstrumentData: PaymentInstrumentData;
    threeDSecureAuthentication: null | ThreeDSecureAuthentication;
}

export type PaymentStatus = "SETTLING" | "SETTLED" | "FAILED" | "AUTHORIZED" | "CANCELLED";
export type PaymentProcessor = "STRIPE" | "PAYPAL" | "ADYEN" | "BRAINTREE";

export interface Payment {
    id: string;
    date: string; // ISO 8601 string
    dateParsed: Date;
    processor: PaymentProcessor;
    processorMerchantId: string;
    status: PaymentStatus;
    orderId: string;
    amount: number;
    amountRefunded: number;
    currencyCode: string;
    paymentInstrument: PaymentInstrument;
}
