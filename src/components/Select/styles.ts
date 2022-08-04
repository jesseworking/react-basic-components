import styled from 'styled-components';
import MuiSelect from '@material-ui/core/Select';

import colors from '../../styles/colors';

export const StyledSelect = styled(MuiSelect)`
  border-radius: 3px;
  background-color: white;
  border: 1px solid ${colors.gainsboro};

  &:hover {
    box-shadow: 0 1.5px 4px 0 rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.04);
  }

  & .select {
    padding: 3px 30px 3px 5px;

    &:focus {
      background-color: ${colors.white};
      outline: auto 5px -webkit-focus-ring-color;
    }
  }
`;
