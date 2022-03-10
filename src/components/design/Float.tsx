import styled from "styled-components";
import { fromTheme } from "../../style";

/**
 * Floating element with margin in the direction of floating
 */

export interface FloatProps {
    direction?: "left" | "right";
}
const Float = styled.div<FloatProps>`
    float: ${({ direction }) => {
        if (direction) return direction;
        return "left";
    }};
    margin-right: ${({ direction }) => {
        if (!direction || direction === "left") return fromTheme("moreMargin");
    }};
    margin-left: ${({ direction }) => {
        if (direction && direction === "right") return fromTheme("moreMargin");
    }};
`;

export default Float;
