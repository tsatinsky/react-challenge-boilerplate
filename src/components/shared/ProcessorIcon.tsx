import React from "react";
import {PaymentProcessor} from "../../lib/payment";

import adyen from "../../assets/adyen.svg"
import braintree from "../../assets/braintree.svg"
import paypal from "../../assets/paypal.svg"
import stripe from "../../assets/stripe.svg"

import Icon from "../design/Icon";

const ProcessorIcon: React.FC<{ processor: PaymentProcessor }> = ({processor}) => {
    const images = {
        "ADYEN": adyen,
        "BRAINTREE": braintree,
        "PAYPAL": paypal,
        "STRIPE": stripe,
    };

    return (
        <Icon imagePath={images[processor]}/>
    );
}

export default ProcessorIcon
