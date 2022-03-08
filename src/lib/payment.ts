export interface PaymentCardInstrumentData {
    // Mastercard, Visa, American Express, other
    network: string
    cardholderName: string;
    last4Digits: string;
    expirationMonth: string;
    expirationYear: string;
}

export interface PaypalOrderInstrumentData {
    paypalOrderId: string;
}

export type PaymentInstrumentData = PaymentCardInstrumentData | PaypalOrderInstrumentData;

export function isPaymentCardInstrumentData(instrumentData: PaymentInstrumentData): instrumentData is PaymentCardInstrumentData {
    return (instrumentData as PaymentCardInstrumentData).cardholderName !== undefined
}

export function isPaypalOrderInstrumentData(instrumentData: PaymentInstrumentData): instrumentData is PaypalOrderInstrumentData {
    return (instrumentData as PaypalOrderInstrumentData).paypalOrderId !== undefined
}

export interface ThreeDSecureAuthentication {
    // NOT_PERFORMED
    responseCode: string;
}

export interface PaymentInstrument {
    // PAYMENT_CARD PAYPAL_ORDER
    paymentInstrumentType: string;
    paymentInstrumentData: PaymentInstrumentData;
    threeDSecureAuthentication: null | ThreeDSecureAuthentication;
}

export interface Payment {
    id: string;
    // ISO 8601 string
    date: string;
    dateParsed: Date;
    // STRIPE PAYPAL ADYEN BRAINTREE
    processor: string;
    processorMerchantId: string;
    status: string;
    orderId: string;
    amount: number;
    amountRefunded: number;
    currencyCode: string;
    paymentInstrument: PaymentInstrument;
}

// const testResponse: Array<Payment> =
//     [{
//         "id": "KZ2Gs2uA",
//         "date": "2021-12-02T12:52:22.585194+00:00",
//         "status": "SETTLED",
//         "orderId": "my_order_id",
//         "processor": "STRIPE",
//         "processorMerchantId": "acct_1GORcsGZqNWFwi8c",
//         "currencyCode": "EUR",
//         "amount": 45,
//         "amountAuthorized": 45,
//         "amountCaptured": 45,
//         "amountRefunded": 45,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "27wGIYl5RN6BtrZyMi67_HwxNjM4NDQ5NTQw",
//             "analyticsId": "OLNeV0cOWB-ngqb5p3R6SjNR",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "4242",
//                 "first6Digits": "424242",
//                 "expirationMonth": "03",
//                 "expirationYear": "2030",
//                 "cardholderName": "John Doe",
//                 "network": "Visa",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "VISA",
//                     "issuerCountryCode": "US",
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "VISA",
//                     "productName": "VISA"
//                 }
//             },
//             "threeDSecureAuthentication": {
//                 "responseCode": "NOT_PERFORMED",
//                 "reasonCode": null,
//                 "reasonText": null,
//                 "protocolVersion": null,
//                 "challengeIssued": null
//             }
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": {
//             "email": "user@primer.io",
//             "phoneNumber": null,
//             "billingAddress": null,
//             "shippingAddress": null,
//             "id": null
//         },
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "6XcFS4uV",
//         "date": "2020-12-08T14:34:29.253182+00:00",
//         "status": "FAILED",
//         "orderId": "WsEqBrTZvVLrUZYXrVsD",
//         "processor": "PAYPAL",
//         "processorMerchantId": "sb-32arh1340866@business.example.com",
//         "currencyCode": "GBP",
//         "amount": 1000,
//         "amountAuthorized": 0,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "Nd4X1h4pSr2hIEPzwulE3XwxNjA3NDM4MDY4",
//             "analyticsId": "LF0wHNjLXJSibsryKdOp8Gwt",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYPAL_ORDER",
//             "paymentInstrumentData": {
//                 "paypalOrderId": "QUFBjkRVWcEwCjEIHseshAWyDqHFYPvq",
//                 "externalPayerInfo": null,
//                 "paypalStatus": null
//             },
//             "threeDSecureAuthentication": {
//                 "responseCode": "NOT_PERFORMED",
//                 "reasonCode": null,
//                 "reasonText": null,
//                 "protocolVersion": null,
//                 "challengeIssued": null
//             }
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "1TKha2s1",
//         "date": "2020-12-08T14:34:24.374751+00:00",
//         "status": "SETTLING",
//         "orderId": "CFqNgojUMqHRGzlOFVBJDX",
//         "processor": "ADYEN",
//         "processorMerchantId": "PrimerJbTestECOM",
//         "currencyCode": "EUR",
//         "amount": 199,
//         "amountAuthorized": 199,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "Qy1Nq08xToS8nODRncjIvnwxNjA3NDM4MDYz",
//             "analyticsId": "J6HhBcMmWgWy5lUaYfffe2oz",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "1111",
//                 "first6Digits": null,
//                 "expirationMonth": "03",
//                 "expirationYear": "2030",
//                 "cardholderName": "MR F. Bar",
//                 "network": "Visa",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "VISA",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "VISA",
//                     "productName": "VISA"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "ORzm8dBi",
//         "date": "2020-12-08T14:34:20.635258+00:00",
//         "status": "SETTLING",
//         "orderId": "nVpDsoYhQhzKlaiBpgjrqe",
//         "processor": "ADYEN",
//         "processorMerchantId": "PrimerJbTestECOM",
//         "currencyCode": "EUR",
//         "amount": 2000,
//         "amountAuthorized": 2000,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "kPKn4fgvQBmYA3Z8BJOhA3wxNjA3NDM4MDYw",
//             "analyticsId": "uEwN0OKdVWi0btoc4cI9uFBk",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "0004",
//                 "first6Digits": null,
//                 "expirationMonth": "03",
//                 "expirationYear": "2030",
//                 "cardholderName": "Mrs Fred Bazzington",
//                 "network": "other",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "MAESTRO",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "MAESTRO",
//                     "productName": "MAESTRO"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "C0wQApvC",
//         "date": "2020-12-08T14:34:16.906517+00:00",
//         "status": "SETTLING",
//         "orderId": "tmnOGVggEgxQWhkLwzNzvk",
//         "processor": "ADYEN",
//         "processorMerchantId": "PrimerJbTestECOM",
//         "currencyCode": "EUR",
//         "amount": 394,
//         "amountAuthorized": 394,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "GSjjhXwKQ-iMj5GKOeKEhnwxNjA3NDM4MDU2",
//             "analyticsId": "uEwN0OKdVWi0btoc4cI9uFBk",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "0004",
//                 "first6Digits": null,
//                 "expirationMonth": "03",
//                 "expirationYear": "2030",
//                 "cardholderName": "F. B. BAZ ESQ",
//                 "network": "other",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "MAESTRO",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "MAESTRO",
//                     "productName": "MAESTRO"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "xQCAIj6z",
//         "date": "2020-12-08T14:34:13.207836+00:00",
//         "status": "SETTLING",
//         "orderId": "yccQHZoZhFYkWbyPgODEih",
//         "processor": "ADYEN",
//         "processorMerchantId": "PrimerJbTestECOM",
//         "currencyCode": "EUR",
//         "amount": 100000,
//         "amountAuthorized": 100000,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "CaBu6Gr5TQmMHdRUZJkL43wxNjA3NDM4MDUy",
//             "analyticsId": "0aRlD7pxWemZECJj96kTy0ls",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "4444",
//                 "first6Digits": null,
//                 "expirationMonth": "03",
//                 "expirationYear": "2030",
//                 "cardholderName": "MR F. B. BAZ",
//                 "network": "Mastercard",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "MASTERCARD",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "MASTERCARD",
//                     "productName": "MASTERCARD"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "medWBCt2",
//         "date": "2020-12-08T14:34:09.574595+00:00",
//         "status": "SETTLING",
//         "orderId": "okaMIBOluwwqMuEwtpuMNV",
//         "processor": "ADYEN",
//         "processorMerchantId": "PrimerJbTestECOM",
//         "currencyCode": "EUR",
//         "amount": 599,
//         "amountAuthorized": 599,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "i1v_5i7yTLuFWUKsOZZCTXwxNjA3NDM4MDQ5",
//             "analyticsId": "J6HhBcMmWgWy5lUaYfffe2oz",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "1111",
//                 "first6Digits": null,
//                 "expirationMonth": "03",
//                 "expirationYear": "2030",
//                 "cardholderName": "MR FOO BAR",
//                 "network": "Visa",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "VISA",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "VISA",
//                     "productName": "VISA"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "sIZipdl7",
//         "date": "2020-12-08T14:34:07.318826+00:00",
//         "status": "AUTHORIZED",
//         "orderId": "oMspVVlskaXkaZOTEfZSEe",
//         "processor": "ADYEN",
//         "processorMerchantId": "PrimerJbTestECOM",
//         "currencyCode": "EUR",
//         "amount": 2000,
//         "amountAuthorized": 2000,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "Js6ZL77VQZSdagXlfvaSuXwxNjA3NDM4MDQ2",
//             "analyticsId": "uEwN0OKdVWi0btoc4cI9uFBk",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "0004",
//                 "first6Digits": null,
//                 "expirationMonth": "03",
//                 "expirationYear": "2030",
//                 "cardholderName": "Mrs Fred Bazzington",
//                 "network": "other",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "MAESTRO",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "MAESTRO",
//                     "productName": "MAESTRO"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "RDIpOeHM",
//         "date": "2020-12-08T14:34:04.976225+00:00",
//         "status": "AUTHORIZED",
//         "orderId": "GEbThuXOGzIrCDtDilPtmZ",
//         "processor": "ADYEN",
//         "processorMerchantId": "PrimerJbTestECOM",
//         "currencyCode": "EUR",
//         "amount": 394,
//         "amountAuthorized": 394,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "g4LAIDeEQ3KybCBOp6n3UXwxNjA3NDM4MDQ0",
//             "analyticsId": "uEwN0OKdVWi0btoc4cI9uFBk",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "0004",
//                 "first6Digits": null,
//                 "expirationMonth": "03",
//                 "expirationYear": "2030",
//                 "cardholderName": "F. B. BAZ ESQ",
//                 "network": "other",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "MAESTRO",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "MAESTRO",
//                     "productName": "MAESTRO"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "SYPy0h13",
//         "date": "2020-12-08T14:34:02.740337+00:00",
//         "status": "AUTHORIZED",
//         "orderId": "NGCiXtVqZNBFSggzlAHyeG",
//         "processor": "ADYEN",
//         "processorMerchantId": "PrimerJbTestECOM",
//         "currencyCode": "EUR",
//         "amount": 100000,
//         "amountAuthorized": 100000,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "tp3pM3bgRDCHQNi-enMRd3wxNjA3NDM4MDQy",
//             "analyticsId": "0aRlD7pxWemZECJj96kTy0ls",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "4444",
//                 "first6Digits": null,
//                 "expirationMonth": "03",
//                 "expirationYear": "2030",
//                 "cardholderName": "MR F. B. BAZ",
//                 "network": "Mastercard",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "MASTERCARD",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "MASTERCARD",
//                     "productName": "MASTERCARD"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "Oybdbo8E",
//         "date": "2020-12-08T14:34:00.279077+00:00",
//         "status": "AUTHORIZED",
//         "orderId": "RybPzeSkFvfuekMpkmBwvh",
//         "processor": "ADYEN",
//         "processorMerchantId": "PrimerJbTestECOM",
//         "currencyCode": "EUR",
//         "amount": 599,
//         "amountAuthorized": 599,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "yQyyk6SATIC8INoEerkIcnwxNjA3NDM4MDM5",
//             "analyticsId": "J6HhBcMmWgWy5lUaYfffe2oz",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "1111",
//                 "first6Digits": null,
//                 "expirationMonth": "03",
//                 "expirationYear": "2030",
//                 "cardholderName": "MR FOO BAR",
//                 "network": "Visa",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "VISA",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "VISA",
//                     "productName": "VISA"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "GkjaEpEr",
//         "date": "2020-12-08T14:33:56.043795+00:00",
//         "status": "SETTLED",
//         "orderId": "DWPnRfuRvOdMbWYtuDXBWc",
//         "processor": "STRIPE",
//         "processorMerchantId": "acct_1GORcsGZqNWFwi8c",
//         "currencyCode": "EUR",
//         "amount": 394,
//         "amountAuthorized": 394,
//         "amountCaptured": 0,
//         "amountRefunded": 394,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "yuAKKmtqS-mLFb0fcfn-H3wxNjA3NDM4MDM1",
//             "analyticsId": "NKS8fpx0VlG4IaO8-E5NQEY1",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "0005",
//                 "first6Digits": null,
//                 "expirationMonth": "03",
//                 "expirationYear": "2030",
//                 "cardholderName": "F. B. BAZ ESQ",
//                 "network": "American Express",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "AMEX",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "AMEX",
//                     "productName": "AMEX"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "UaAuUgMo",
//         "date": "2020-12-08T14:33:53.550869+00:00",
//         "status": "SETTLED",
//         "orderId": "dvouCHtmvshYiSvfWcNvCJ",
//         "processor": "STRIPE",
//         "processorMerchantId": "acct_1GORcsGZqNWFwi8c",
//         "currencyCode": "EUR",
//         "amount": 100000,
//         "amountAuthorized": 100000,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "bJeTYRq9RvKTBhHjshKl_XwxNjA3NDM4MDMz",
//             "analyticsId": "sfxzuNdQV3iDX8fcJf3-LGUw",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "4444",
//                 "first6Digits": null,
//                 "expirationMonth": "11",
//                 "expirationYear": "2028",
//                 "cardholderName": "MR F. B. BAZ",
//                 "network": "Mastercard",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "MASTERCARD",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "MASTERCARD",
//                     "productName": "MASTERCARD"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "7Ykr0F4B",
//         "date": "2020-12-08T14:33:50.960226+00:00",
//         "status": "SETTLED",
//         "orderId": "ejYlhunPRjWXVsurRhnBej",
//         "processor": "STRIPE",
//         "processorMerchantId": "acct_1GORcsGZqNWFwi8c",
//         "currencyCode": "EUR",
//         "amount": 599,
//         "amountAuthorized": 599,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "q7B8oHl2SEi5x5THGEVWGHwxNjA3NDM4MDMw",
//             "analyticsId": "DQ13knuAVFSDqnH9we7swzNR",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "4242",
//                 "first6Digits": null,
//                 "expirationMonth": "03",
//                 "expirationYear": "2030",
//                 "cardholderName": "MR FOO BAR",
//                 "network": "Visa",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "VISA",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "VISA",
//                     "productName": "VISA"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "nhXgSjDl",
//         "date": "2020-12-08T14:33:48.616968+00:00",
//         "status": "SETTLED",
//         "orderId": "AicrRUybtryqGXiFrDUzve",
//         "processor": "STRIPE",
//         "processorMerchantId": "acct_1GORcsGZqNWFwi8c",
//         "currencyCode": "EUR",
//         "amount": 1119,
//         "amountAuthorized": 1119,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "f6ZBZshSS0uN63KSpoJ7h3wxNjA3NDM4MDI4",
//             "analyticsId": "K-Xk3mfKX2igLRSL2nCFW3pm",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "5100",
//                 "first6Digits": null,
//                 "expirationMonth": "04",
//                 "expirationYear": "2025",
//                 "cardholderName": "MR. F. B. Barrington",
//                 "network": "Mastercard",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "MASTERCARD",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "MASTERCARD",
//                     "productName": "MASTERCARD"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "qa9xSwjR",
//         "date": "2020-12-08T14:33:46.071331+00:00",
//         "status": "SETTLED",
//         "orderId": "TnLymYPOEhPgglxMLXJMlD",
//         "processor": "STRIPE",
//         "processorMerchantId": "acct_1GORcsGZqNWFwi8c",
//         "currencyCode": "EUR",
//         "amount": 199,
//         "amountAuthorized": 199,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "A_0CW2nyS5e_vwruS3BBMnwxNjA3NDM4MDI1",
//             "analyticsId": "AK1cpH9_WAix-0NNDtFVjXpI",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "5556",
//                 "first6Digits": null,
//                 "expirationMonth": "03",
//                 "expirationYear": "2030",
//                 "cardholderName": "MR F. Bar",
//                 "network": "Visa",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "VISA",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "VISA",
//                     "productName": "VISA"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "R2BUlpZC",
//         "date": "2020-12-08T14:33:43.745595+00:00",
//         "status": "AUTHORIZED",
//         "orderId": "CibWlPkmDbXefjSYfhyhnJ",
//         "processor": "STRIPE",
//         "processorMerchantId": "acct_1GORcsGZqNWFwi8c",
//         "currencyCode": "EUR",
//         "amount": 2000,
//         "amountAuthorized": 2000,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "susw8NRzTIKHs_pZMLppTHwxNjA3NDM4MDIz",
//             "analyticsId": "UA-hR4mBUROped14hOBbxmlM",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "3222",
//                 "first6Digits": null,
//                 "expirationMonth": "05",
//                 "expirationYear": "2027",
//                 "cardholderName": "Mrs Fred Bazzington",
//                 "network": "other",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "MASTERCARD",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "MASTERCARD",
//                     "productName": "MASTERCARD"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "46Fu49az",
//         "date": "2020-12-08T14:33:41.450551+00:00",
//         "status": "AUTHORIZED",
//         "orderId": "wHOgwKmQaqwSuYbwxdswoY",
//         "processor": "STRIPE",
//         "processorMerchantId": "acct_1GORcsGZqNWFwi8c",
//         "currencyCode": "USD",
//         "amount": 394,
//         "amountAuthorized": 394,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "vUAxVUgYRqu8aSBksHEYJHwxNjA3NDM4MDIx",
//             "analyticsId": "NKS8fpx0VlG4IaO8-E5NQEY1",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "0005",
//                 "first6Digits": null,
//                 "expirationMonth": "03",
//                 "expirationYear": "2030",
//                 "cardholderName": "F. B. BAZ ESQ",
//                 "network": "American Express",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "AMEX",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "AMEX",
//                     "productName": "AMEX"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "qAxMgshO",
//         "date": "2020-12-08T14:33:39.301875+00:00",
//         "status": "AUTHORIZED",
//         "orderId": "WaCOsHFLqNHLMcOZfyaLAS",
//         "processor": "STRIPE",
//         "processorMerchantId": "acct_1GORcsGZqNWFwi8c",
//         "currencyCode": "EUR",
//         "amount": 100000,
//         "amountAuthorized": 100000,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "s0lroV2fTc2afcPdaLOE93wxNjA3NDM4MDE4",
//             "analyticsId": "sfxzuNdQV3iDX8fcJf3-LGUw",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "4444",
//                 "first6Digits": null,
//                 "expirationMonth": "11",
//                 "expirationYear": "2028",
//                 "cardholderName": "MR F. B. BAZ",
//                 "network": "Mastercard",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "MASTERCARD",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "MASTERCARD",
//                     "productName": "MASTERCARD"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "c51HrW5E",
//         "date": "2020-12-08T14:33:37.216828+00:00",
//         "status": "AUTHORIZED",
//         "orderId": "VvLjSmMBzqObhWXbDfpvpF",
//         "processor": "STRIPE",
//         "processorMerchantId": "acct_1GORcsGZqNWFwi8c",
//         "currencyCode": "EUR",
//         "amount": 599,
//         "amountAuthorized": 599,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "MM9pgrr1Rlm_LhsT8ni-YHwxNjA3NDM4MDE2",
//             "analyticsId": "DQ13knuAVFSDqnH9we7swzNR",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "4242",
//                 "first6Digits": null,
//                 "expirationMonth": "03",
//                 "expirationYear": "2030",
//                 "cardholderName": "MR FOO BAR",
//                 "network": "Visa",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "VISA",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "VISA",
//                     "productName": "VISA"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "NgSCQH68",
//         "date": "2020-12-08T14:33:34.736338+00:00",
//         "status": "FAILED",
//         "orderId": "VDiPPyQgkDAigRzsDbjZQp",
//         "processor": "BRAINTREE",
//         "processorMerchantId": "primer",
//         "currencyCode": "EUR",
//         "amount": 300001,
//         "amountAuthorized": 0,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "LfGQqbjiSu6cJ-HTjdM8u3wxNjA3NDM4MDE0",
//             "analyticsId": "2p8okJHKWH-Oi1Uz1zNfLHRz",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "0004",
//                 "first6Digits": null,
//                 "expirationMonth": "11",
//                 "expirationYear": "2028",
//                 "cardholderName": "MR F. B. NOWT",
//                 "network": "Visa",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "VISA",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "VISA",
//                     "productName": "VISA"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "h9GnXVcW",
//         "date": "2020-12-08T14:33:33.551519+00:00",
//         "status": "FAILED",
//         "orderId": "DYvuWrBKzVncyWRJlWoafv",
//         "processor": "BRAINTREE",
//         "processorMerchantId": "test1",
//         "currencyCode": "GBP",
//         "amount": 1122,
//         "amountAuthorized": 0,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "F-MExuylReSPqh9BMcCA9nwxNjA3NDM4MDEz",
//             "analyticsId": "dOWv_1eeW6uiBf8Ir7jK7mMz",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "0005",
//                 "first6Digits": null,
//                 "expirationMonth": "04",
//                 "expirationYear": "2025",
//                 "cardholderName": "MR. F. B. Barrington",
//                 "network": "American Express",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "AMEX",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "AMEX",
//                     "productName": "AMEX"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "xcrQYQXQ",
//         "date": "2020-12-08T14:33:31.527003+00:00",
//         "status": "DECLINED",
//         "orderId": "OlUtvfZfunWtmBEyeVjRyy",
//         "processor": "BRAINTREE",
//         "processorMerchantId": "primer",
//         "currencyCode": "EUR",
//         "amount": 200100,
//         "amountAuthorized": 0,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "o8G7XaADQ5mjRbK4STmUBHwxNjA3NDM4MDEx",
//             "analyticsId": "-NxZbWYcXPiRMynOCdzu2G5L",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "1111",
//                 "first6Digits": null,
//                 "expirationMonth": "03",
//                 "expirationYear": "2030",
//                 "cardholderName": "MR FOO NOPE",
//                 "network": "Visa",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "VISA",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "VISA",
//                     "productName": "VISA"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "LXZwKoEp",
//         "date": "2020-12-08T14:33:28.272994+00:00",
//         "status": "CANCELLED",
//         "orderId": "aaMAExgcPlcOiHKxPGzvDG",
//         "processor": "BRAINTREE",
//         "processorMerchantId": "test1",
//         "currencyCode": "GBP",
//         "amount": 199,
//         "amountAuthorized": 199,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "8FH1s2_lRLa3LlGNL4u5ZXwxNjA3NDM4MDA3",
//             "analyticsId": "qvOojFpgW5iusDj0sRGHnUZQ",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "0061",
//                 "first6Digits": null,
//                 "expirationMonth": "03",
//                 "expirationYear": "2030",
//                 "cardholderName": "MR F. Bar",
//                 "network": "Visa",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "VISA",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "VISA",
//                     "productName": "VISA"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "A7S9o4Qx",
//         "date": "2020-12-08T14:33:26.245403+00:00",
//         "status": "SETTLING",
//         "orderId": "MIUSjQkfHeHGXDBHkdwcKZ",
//         "processor": "BRAINTREE",
//         "processorMerchantId": "primer",
//         "currencyCode": "EUR",
//         "amount": 2000,
//         "amountAuthorized": 2000,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "MVQRDPEVS3WCmwUUN8xpyXwxNjA3NDM4MDA1",
//             "analyticsId": "AfqFjSAkWsyArFbH161P9mRn",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "1117",
//                 "first6Digits": null,
//                 "expirationMonth": "05",
//                 "expirationYear": "2027",
//                 "cardholderName": "Mrs Fred Bazzington",
//                 "network": "other",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "JCB",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "JCB",
//                     "productName": "JCB"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "1PApii3V",
//         "date": "2020-12-08T14:33:24.334906+00:00",
//         "status": "SETTLING",
//         "orderId": "NQjXIsjIPvzpWLrVQaZTuj",
//         "processor": "BRAINTREE",
//         "processorMerchantId": "test1",
//         "currencyCode": "GBP",
//         "amount": 1000,
//         "amountAuthorized": 1000,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "3GTc1T1dRbqOyksL-2LggnwxNjA3NDM4MDAz",
//             "analyticsId": "FJ88OwU7Xe6fdMGdsZFPYURK",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "0011",
//                 "first6Digits": null,
//                 "expirationMonth": "03",
//                 "expirationYear": "2030",
//                 "cardholderName": "F. B. BAZ ESQ",
//                 "network": "other",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "MASTERCARD",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "MASTERCARD",
//                     "productName": "MASTERCARD"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "1DpHCBPH",
//         "date": "2020-12-08T14:33:22.365395+00:00",
//         "status": "SETTLING",
//         "orderId": "VSCgqCRcrcNFbemCTTTjBJ",
//         "processor": "BRAINTREE",
//         "processorMerchantId": "primer",
//         "currencyCode": "EUR",
//         "amount": 3002,
//         "amountAuthorized": 3002,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "MKwM93kaRY2_lK672uvqjnwxNjA3NDM4MDAx",
//             "analyticsId": "2p8okJHKWH-Oi1Uz1zNfLHRz",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "0004",
//                 "first6Digits": null,
//                 "expirationMonth": "11",
//                 "expirationYear": "2028",
//                 "cardholderName": "MR F. B. BAZ",
//                 "network": "Visa",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "VISA",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "VISA",
//                     "productName": "VISA"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "XT4x4OFE",
//         "date": "2020-12-08T14:33:19.368551+00:00",
//         "status": "SETTLING",
//         "orderId": "BSmyrdhhtafiWvpaPkgKaD",
//         "processor": "BRAINTREE",
//         "processorMerchantId": "primer",
//         "currencyCode": "EUR",
//         "amount": 999,
//         "amountAuthorized": 999,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "GYXUGSDDQXa75Acb7zCDd3wxNjA3NDM3OTk4",
//             "analyticsId": "-NxZbWYcXPiRMynOCdzu2G5L",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "1111",
//                 "first6Digits": null,
//                 "expirationMonth": "03",
//                 "expirationYear": "2030",
//                 "cardholderName": "MR FOO BAR",
//                 "network": "Visa",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "VISA",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "VISA",
//                     "productName": "VISA"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "sOIULBt8",
//         "date": "2020-12-08T14:33:17.123754+00:00",
//         "status": "AUTHORIZED",
//         "orderId": "GEAwvqzascnscXSdEtOGVo",
//         "processor": "BRAINTREE",
//         "processorMerchantId": "primer",
//         "currencyCode": "EUR",
//         "amount": 2000,
//         "amountAuthorized": 2000,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "W6M5nhnOSq2_m5Ghsemvj3wxNjA3NDM3OTk2",
//             "analyticsId": "AfqFjSAkWsyArFbH161P9mRn",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "1117",
//                 "first6Digits": null,
//                 "expirationMonth": "05",
//                 "expirationYear": "2027",
//                 "cardholderName": "Mrs Fred Bazzington",
//                 "network": "other",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "JCB",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "JCB",
//                     "productName": "JCB"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "yL7SYCgo",
//         "date": "2020-12-08T14:33:15.091570+00:00",
//         "status": "AUTHORIZED",
//         "orderId": "cNJfwGxpQnQRUnAwfQiTaT",
//         "processor": "BRAINTREE",
//         "processorMerchantId": "test1",
//         "currencyCode": "GBP",
//         "amount": 1000,
//         "amountAuthorized": 1000,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "qivJyytJRGu1hhcF2N9ab3wxNjA3NDM3OTk0",
//             "analyticsId": "FJ88OwU7Xe6fdMGdsZFPYURK",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "0011",
//                 "first6Digits": null,
//                 "expirationMonth": "03",
//                 "expirationYear": "2030",
//                 "cardholderName": "F. B. BAZ ESQ",
//                 "network": "other",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "MASTERCARD",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "MASTERCARD",
//                     "productName": "MASTERCARD"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "KdLOXC1q",
//         "date": "2020-12-08T14:33:13.032012+00:00",
//         "status": "AUTHORIZED",
//         "orderId": "STXQCOtLyHSVYgWQHLRtLm",
//         "processor": "BRAINTREE",
//         "processorMerchantId": "primer",
//         "currencyCode": "EUR",
//         "amount": 99,
//         "amountAuthorized": 99,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "fHvvHwAoTaCbO-xfY3-vyXwxNjA3NDM3OTky",
//             "analyticsId": "2p8okJHKWH-Oi1Uz1zNfLHRz",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "0004",
//                 "first6Digits": null,
//                 "expirationMonth": "11",
//                 "expirationYear": "2028",
//                 "cardholderName": "MR F. B. BAZ",
//                 "network": "Visa",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "VISA",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "VISA",
//                     "productName": "VISA"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }, {
//         "id": "r0tIlmhL",
//         "date": "2020-12-08T14:33:10.743094+00:00",
//         "status": "AUTHORIZED",
//         "orderId": "fwobZabQsDZSXlpCUPtTQW",
//         "processor": "BRAINTREE",
//         "processorMerchantId": "primer",
//         "currencyCode": "EUR",
//         "amount": 1199,
//         "amountAuthorized": 1199,
//         "amountCaptured": 0,
//         "amountRefunded": 0,
//         "requiredAction": null,
//         "statementDescriptor": null,
//         "paymentInstrument": {
//             "token": "mAxplQUHQnmdY__ClIWApnwxNjA3NDM3OTkw",
//             "analyticsId": "-NxZbWYcXPiRMynOCdzu2G5L",
//             "tokenType": "SINGLE_USE",
//             "paymentInstrumentType": "PAYMENT_CARD",
//             "paymentInstrumentData": {
//                 "last4Digits": "1111",
//                 "first6Digits": null,
//                 "expirationMonth": "03",
//                 "expirationYear": "2030",
//                 "cardholderName": "MR FOO BAR",
//                 "network": "Visa",
//                 "isNetworkTokenized": false,
//                 "binData": {
//                     "network": "VISA",
//                     "issuerCountryCode": null,
//                     "issuerName": null,
//                     "issuerCurrencyCode": null,
//                     "regionalRestriction": "UNKNOWN",
//                     "accountNumberType": "UNKNOWN",
//                     "accountFundingType": "UNKNOWN",
//                     "prepaidReloadableIndicator": "NOT_APPLICABLE",
//                     "productUsageType": "UNKNOWN",
//                     "productCode": "VISA",
//                     "productName": "VISA"
//                 }
//             },
//             "threeDSecureAuthentication": null
//         },
//         "vaultedPaymentInstrument": null,
//         "customer": null,
//         "lastPaymentError": null,
//         "metadata": null
//     }];
