import styled from 'styled-components'
import { fromTheme } from '../../style';

const Panel = styled.div`
  border-radius: ${fromTheme("baseRadius")};
  background-color: ${fromTheme("backgroundColor")};
  padding: ${fromTheme("basePadding")};
  box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  height: 100%;
`;

export default Panel;
