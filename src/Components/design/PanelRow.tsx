import styled from 'styled-components'
import { fromTheme } from '../../style';

const PanelRow = styled.div`
  padding: ${fromTheme("basePadding")};
  border-bottom: 1px solid ${fromTheme("separatorColor")};
  &:last-child{
    border-bottom: none;
  }
`;

export default PanelRow;
