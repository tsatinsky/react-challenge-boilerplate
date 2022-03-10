import styled, { css } from "styled-components";
import { fromTheme } from "../../style";

const headingBaseCSS = css`
    color: ${fromTheme("textColor")};
    & * {
        vertical-align: middle;
    }
    margin: 0 0 ${fromTheme("baseMargin")} 0;
    & > span {
        margin-right: ${fromTheme("baseMargin")};
    }
`;

const H1 = styled.h1`
    ${headingBaseCSS}
    font-size: 33px;
    font-weight: 450;
`;

const H2 = styled.h2`
    ${headingBaseCSS}
    font-size: 23px;
    font-weight: 400;
`;

const H4 = styled.h4`
    ${headingBaseCSS}
    font-size: 13px;
    font-weight: 400;
    color: ${fromTheme("textColorDimmed")};
    margin: 0 0 3px 0;
`;

const Text = styled.span<{
    small?: boolean;
    bigger?: boolean;
    big?: boolean;
    large?: boolean;
    dimmed?: boolean;
    align?: "left" | "right";
}>`
    color: ${({ dimmed }) => {
        if (dimmed) {
            return fromTheme("textColorDimmed");
        }
        return fromTheme("textColor");
    }};
    font-size: ${({ small, bigger, big, large }) => {
        if (small) return fromTheme("textSizeSmall");
        if (bigger) return fromTheme("textSizeBigger");
        if (big) return fromTheme("textSizeBig");
        if (large) return fromTheme("textSizeLarge");
        fromTheme("textSize");
    }};
    font-weight: ${({ bigger, big }) => {
        if (bigger) return "400";
        if (big) return "600";
        return "normal";
    }};
    float: ${({ align }) => {
        if (align) return align;
    }};
`;

export { H1, H2, H4, Text };
