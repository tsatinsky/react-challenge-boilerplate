import styled from 'styled-components'

const AlignText = styled.span<{align?: "left" | "right"}>`
  float: ${({align}) => {
      if (align) return align;
  }};
`;

export default AlignText;
