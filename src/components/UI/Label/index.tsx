import React from 'react';
import { Label as MuiLabel, ColorLabelVariants } from './styles';
import { LabelProps } from './interfaces';

export function Label({
  type = 'default',
  children = '',
  ...props
}: LabelProps) {
  return (
    <MuiLabel
      {...props}
      type={type}
    >
      {children}
    </MuiLabel>
  );
}
