import styled from "styled-components";

const Icon = styled.span<{imagePath: string}>`
  line-height: 24px;
  background-image: ${({imagePath}) => {
    return `url(${imagePath})`;
  }};
  height: 24px; 
  line-height: 24px;
  width: 24px;
  display: inline-block;
  margin: 0 3px;
`;

export default Icon