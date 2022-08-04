import * as React from 'react';
import styled from 'styled-components';

import colors from '../../styles/colors';

const Div = styled.div`
  display: inline-block;
  border-radius: 4px;
  background-color: ${colors.clickable};
  color: white;
  cursor: pointer;
  padding: 5px 10px 5px 10px;
`;

export type ButtonProps = {
  className?: string;
  children?: React.ReactNode | string;
  onClick?: (e: React.MouseEvent) => void;
  native?: boolean;
  type?: string;
};

export const Button = ({
  children,
  className,
  onClick,
  native,
  type
}: ButtonProps) =>
  native ? (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  ) : (
    <Div className={className} onClick={onClick}>
      {children}
    </Div>
  );

export default Button;
