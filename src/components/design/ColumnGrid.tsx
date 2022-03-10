import styled from "styled-components";
import { fromTheme } from "../../style";

/**
 * Grid of columns with gaps between them.
 * Number of columns and their size is defined by the proportions parameter
 */

export interface ColumnGridProps {
    proportions?: number[];
}

const ColumnGrid = styled.div<ColumnGridProps>`
    display: grid;
    grid-template-columns: ${({ proportions }) => {
        // convert proportions to percentages
        if (proportions) {
            const sum = proportions.reduce((acc, val) => acc + val, 0);
            return proportions.reduce((acc, val) => acc + ` ${(val / sum) * 100}fr`, "");
        }
        return "none";
    }};
    gap: ${fromTheme("baseMargin")};
`;

export default ColumnGrid;
