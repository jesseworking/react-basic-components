import * as React from 'react';

import { StyledTextArea } from './styles';

export type TextAreaProps = {
  className?: string;
  disableUnderline?: boolean;
  input: {
    value: string;
    onChange: (value: string) => void;
  };
  rows: number;
  cols: number;
};

export const TextArea = ({
  className,
  cols,
  input: { onChange, value },
  rows
}: TextAreaProps) => (
  <StyledTextArea
    className={className}
    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
      onChange(event.target.value)
    }
    value={value}
    rows={rows}
    cols={cols}
  />
);

export default TextArea;
