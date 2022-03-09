import styled from 'styled-components'
import { fromTheme } from '../../style';

const PanelRow = styled.div`
  padding: ${fromTheme("morePadding")};
  border-bottom: 1px solid ${fromTheme("separatorColor")};
  &:last-child{
    border-bottom: none;
  }
  cursor: pointer;
  & * {
    vertical-align: middle;
  }
`;

export default PanelRow;
