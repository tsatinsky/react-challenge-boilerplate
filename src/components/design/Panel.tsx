import styled from 'styled-components'
import { fromTheme } from '../../style';

export interface PanelProps {
    noPadding?:boolean;
}

const Panel = styled.div<PanelProps>`
  border-radius: ${fromTheme("baseRadius")};
  background-color: ${fromTheme("backgroundColor")};
  padding: ${(props) => {
      if (props.noPadding) {
          return 0;
      }
      return fromTheme("basePadding")
  }};
  box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  height: 100%;
`;

export default Panel;
