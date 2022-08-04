import styled from 'styled-components';

/**
 * Explicitly applying 'pointer-events: none' per
 * https://github.com/facebook/react/issues/4963
 */
export const Svg = styled.svg`
  pointer-events: 'none';
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'auto')};
`;

export const Img = styled.img`
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'auto')};
`;
