import styled from "styled-components";

/**
 * Generic icon
 * Background defined by the "imagePath" property
 */

export interface IconProps {
    imagePath: string;
}

const Icon = styled.span<IconProps>`
    line-height: 24px;
    background-image: ${({ imagePath }) => {
        return `url(${imagePath})`;
    }};
    height: 24px;
    line-height: 24px;
    width: 24px;
    display: inline-block;
    margin: 0 3px;
`;

export default Icon;
