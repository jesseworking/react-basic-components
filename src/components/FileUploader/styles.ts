import styled from 'styled-components';
import BaseFileDropzone from '../FileDropzone';

import colors from '../../styles/colors';

export const Root = styled.div`
  display: block;
  width: 400px;
`;

export const FileDropzone = styled(BaseFileDropzone)`
  background: ${colors.white};

  &:hover {
    box-shadow: 0 1.5px 4px 0 rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.04);
  }
`;
