import React from "react";
import {PaymentStatus} from "../../lib/payment";
import Badge, {BadgeProps} from "../design/Badge";

export interface PaymentStatusBadgeProps {
    status: PaymentStatus
    large?: boolean;
}
const PaymentStatusBadge: React.FC<PaymentStatusBadgeProps> = ({status, large}) => {
    const text = status.toLowerCase()
    let badgeProps: BadgeProps = {};
    if (status === "AUTHORIZED" || status === "SETTLED") {
        badgeProps = {success: true};
    } else if (status === "FAILED" || status === "CANCELLED") {
        badgeProps = {error: true};
    }
    return <Badge {...badgeProps} large={large}>{text}</Badge>
}

export default PaymentStatusBadge