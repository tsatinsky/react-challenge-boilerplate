import React from "react";
import Badge from "../design/Badge";
import { capitalise } from "../paymentStringTools";

export interface ThreeDSResponseBadgeProps {
    status: string;
}

const ThreeDSResponseBadge: React.FC<ThreeDSResponseBadgeProps> = ({ status }) => {
    return <Badge>{capitalise(status)}</Badge>;
};

export default ThreeDSResponseBadge;
