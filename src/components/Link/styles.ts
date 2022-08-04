import styled from 'styled-components';

import colors from '../../styles/colors';
import { LinkProps } from './index';

const { clickable, clickableHover, clickableLoading, silver } = colors;

export const Anchor = styled.a<LinkProps>`
  color: ${({ disabled, loading }) =>
    disabled ? silver : loading ? clickableLoading : clickable};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ disabled, loading }) =>
      disabled ? silver : loading ? clickableLoading : clickableHover};
  }
`;
