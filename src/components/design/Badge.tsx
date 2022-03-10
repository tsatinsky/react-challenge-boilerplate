import styled from "styled-components";
import { fromTheme } from "../../style";

export interface BadgeProps {
    success?: boolean;
    error?: boolean;
    large?: boolean;
}

const Badge = styled.span<BadgeProps>`
    background-color: ${(props) => {
        if (props.success) return fromTheme("successBackground");
        if (props.error) return fromTheme("errorBackground");
        return fromTheme("neutralBackground");
    }};
    color: ${(props) => {
        if (props.success) return fromTheme("successTextColor");
        if (props.error) return fromTheme("errorTextColor");
        return fromTheme("neutralTextColor");
    }};
    font-size: ${({ large }) => {
        if (large) return fromTheme("textSizeBig");
        return fromTheme("textSizeSmall");
    }};

    padding: ${({ large }) => {
        if (large) return "12px 10px";
        return "2px 4px";
    }};
    border-radius: ${fromTheme("baseRadius")};
    display: inline-block;
`;

export default Badge;
