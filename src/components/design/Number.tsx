import React from "react";

/**
 * Formats number to locale number format
 */

export interface NumberProps {
    value: number;
}
const Number: React.FC<NumberProps> = ({ value }) => <>{value.toLocaleString("en-GB")}</>;

export default Number;
