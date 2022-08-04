import styled from 'styled-components';
import MuiStep from '@material-ui/core/Step';

export const Step = styled(MuiStep)`
  display: block;

  &.clickable {
    cursor: pointer;
  }
`;
