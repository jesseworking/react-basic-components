import * as React from 'react';
import MuiChip from '@material-ui/core/Chip';

export type ChipProps = {
  children: string;
  className: string;
  onDelete: () => void;
};

export const Chip = ({ children, className, onDelete }: ChipProps) => (
  <MuiChip className={className} label={children} onDelete={onDelete} />
);

export default Chip;
