import styled from 'styled-components';

import colors from '../../styles/colors';

export const StyledTextArea = styled.textarea`
  display: inline-block;
  border-radius: 3px;
  border: 1px solid ${colors.gainsboro};
  padding: 3px 5px;

  &:hover {
    box-shadow: 0 1.5px 4px 0 rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.04);
  }

  &:focus {
    outline: none;
    border: 2px solid ${colors.clickable};
    margin: -1px !important;
  }
`;
