import * as React from 'react';
import cx from 'classnames';
import { StyledSelect } from './styles';

export type SelectProps = {
  children: React.ReactNode;
  className?: string;
  input: {
    onChange: (value: string | number) => void;
    value: string | number;
  };
  onClose?: () => void;
  onOpen?: () => void;
  renderValue?: () => React.ReactNode;
  ref?: ((instance: any) => void) | React.RefObject<any> | null;
  selectClassName: string;
};

const Select = ({
  children,
  className,
  input: { onChange, value },
  onClose,
  onOpen,
  ref,
  renderValue,
  selectClassName
}: SelectProps) => (
  <StyledSelect
    classes={{
      root: className,
      select: cx('select', selectClassName)
    }}
    className={''}
    disableUnderline
    innerRef={ref}
    onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
      onChange(event.target.value)
    }
    onClose={onClose}
    onOpen={onOpen}
    native
    renderValue={renderValue}
    style={{}}
    value={value}
    variant="standard"
  >
    {children}
  </StyledSelect>
);

export default Select;
