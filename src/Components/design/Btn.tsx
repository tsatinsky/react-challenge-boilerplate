import styled from "styled-components";
import React from "react";
import {fromTheme} from "../../style";

const StyledBtn = styled.button`
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
const Btn: React.FC<BtnProps> = ({children, onClick}) => (
    <StyledBtn onClick={onClick}>{children}</StyledBtn>
);

export default Btn;
