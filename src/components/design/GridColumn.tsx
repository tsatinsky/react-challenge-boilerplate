import styled from "styled-components";

/**
 * Column element to be used within the ColumnGrid
 * Can use multiple columns - defined by the "span" property
 */

const GridColumn = styled.div<{ span?: number }>`
    grid-column: ${(props) => {
        return props.span ? `span ${props.span}` : undefined;
    }};
`;

export default GridColumn;
