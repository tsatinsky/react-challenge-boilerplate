import styled from "styled-components";
import React from "react";
import {fromTheme} from "../../style";

const StyledButton = styled.button`
  border: none;
  background: none;
  color: blue;
  font-color: ${fromTheme("linkTextColor")};
  font-size: ${fromTheme("textSizeBigger")};
  cursor: pointer;
`;

export interface BtnProps {
    onClick():void
}
const Button: React.FC<BtnProps> = ({children, onClick}) => (
    <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;
