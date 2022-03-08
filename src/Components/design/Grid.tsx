import styled from 'styled-components'
import {fromTheme} from "../../style";

const Grid = styled.div<{proportions: number[]}>`
  display: grid;
  grid-template-columns: ${({ proportions }) => {
    const sum = proportions.reduce((acc, val) => acc+val, 0);
    return proportions.reduce((acc, val) => acc +` ${val/sum*100}%`, "")
  }};
  gap: ${fromTheme("baseMargin")};

`;

export default Grid;
