import styled from 'styled-components';

import colors from '../../styles/colors';

export const List = styled.div`
  padding: 0;
  max-height: 300px;
  overflow: scroll;
  box-shadow: 0 7px 12px 0 rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  z-index: -1;
`;

export const ListItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    background-color: ${colors.cloud};
  }

  &:active {
    background-color: ${colors.gainsboro};
  }
`;
