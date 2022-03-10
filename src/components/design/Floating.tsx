import styled from "styled-components";
import { fromTheme } from "../../style";

/**
 * Floating element with margin in the direction of floating
 */

const Floating = styled.div<{ float?: "left" | "right" }>`
    float: ${({ float }) => {
        if (float) return float;
        return "left";
    }};
    margin-right: ${({ float }) => {
        if (!float || float === "left") return fromTheme("moreMargin");
    }};
    margin-left: ${({ float }) => {
        if (float && float === "right") return fromTheme("moreMargin");
    }};
`;

export default Floating;
