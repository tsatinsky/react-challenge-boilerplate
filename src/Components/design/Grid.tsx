import styled from 'styled-components'
import {fromTheme} from "../../style";

const Grid = styled.div<{columns?: number}>`
  display: grid;
  grid-template-columns: ${({columns}) => columns ? `repeat(${columns}, 1fr)` : undefined};
  gap: ${fromTheme("baseMargin")};

`;

export default Grid;
