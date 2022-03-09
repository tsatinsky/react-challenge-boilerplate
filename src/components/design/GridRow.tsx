import styled from 'styled-components'

const GridRow = styled.div<{span?: number}>`
  grid-column: ${(props) => {
      return props.span ? `span ${props.span}` : undefined
  }};
`;

export default GridRow;
