import React from "react";
import {CardNetwork} from "../../lib/payment";

import mc from "../../assets/mastercard.svg"
import visa from "../../assets/visa.svg"
import amex from "../../assets/amex.svg"
import other from "../../assets/payment-card.svg"

import Icon from "../design/Icon";

const CardNetworkIcon: React.FC<{ network: CardNetwork }> = ({network}) => {
    const images = {
        "Mastercard": mc,
        "Visa": visa,
        "American Express": amex,
        "other": other,
    };

    return (
        <Icon imagePath={images[network]}/>
    );
}

export default CardNetworkIcon
