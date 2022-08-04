import * as React from 'react';
import {} from 'styled-components/cssprop';

import colors from '../../styles/colors';

export type TextFieldProps = {
  autoFocus?: boolean;
  className?: string;
  disableUnderline?: boolean;
  required?: boolean;
  input: {
    value: string;
    onChange: (value: string) => void;
  };
  placeholder?: string;
  onEnter?: () => void;
  type?: string;
};

export const TextField = ({
  autoFocus,
  className,
  required,
  input: { onChange, value },
  placeholder,
  type = 'text',
  onEnter = () => {}
}: TextFieldProps) => (
  <input
    autoFocus={autoFocus}
    className={className}
    css={`
      display: inline-block;
      border-radius: 3px;
      border: 1px solid ${colors.gainsboro};
      padding: 3px 5px;

      &:hover {
        box-shadow: 0 1.5px 4px 0 rgba(0, 0, 0, 0.1),
          0 0 0 1px rgba(0, 0, 0, 0.04);
      }

      &:focus {
        outline: none;
        border: 2px solid ${colors.clickable};
        margin: -1px;
      }
    `}
    required={required}
    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    }}
    onKeyPress={(event: React.KeyboardEvent) => {
      event.stopPropagation();
      if (event.key === 'Enter') onEnter();
    }}
    placeholder={placeholder}
    type={type}
    value={value}
  />
);

export default TextField;
