import * as React from 'react';

import { Anchor } from './styles';

export type LinkProps = {
  to?: string;
  children?: React.ReactNode;
  className: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  onMouseOver?: (event: React.MouseEvent) => void;
  onMouseOut?: (event: React.MouseEvent) => void;
  target?: string;
  title?: string;
};

const Link = ({
  to = '',
  children,
  className,
  disabled,
  onClick = () => {},
  onMouseOver = () => {},
  onMouseOut = () => {},
  target,
  title
}: LinkProps) => (
  <Anchor
    href={to}
    onClick={(event: React.MouseEvent) => {
      if (!disabled) onClick(event);
    }}
    onMouseOver={(event: React.MouseEvent) => onMouseOver(event)}
    onMouseOut={(event: React.MouseEvent) => onMouseOut(event)}
    className={className}
    target={target}
    title={title}
  >
    {children}
  </Anchor>
);

export default Link;
