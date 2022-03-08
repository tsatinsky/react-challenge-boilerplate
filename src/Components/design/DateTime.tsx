import React from "react";

export interface DateTimeProps {
    date: Date;
}
const DateTime: React.FC<DateTimeProps> = ({date}) => (
    <>
        {
            date.toLocaleString('en-GB', {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
            })
        }
    </>
)



export default DateTime;

