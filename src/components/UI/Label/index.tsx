import React from 'react';
import { MuiLabel, ColorLabelVariants } from './styles';

interface Props {
  type?: keyof typeof ColorLabelVariants;
  children?: string | JSX.Element;
}

export function Label({ type = 'default', children = '' }: Props) {
  return (
    <MuiLabel category={type}>
      {children}
    </MuiLabel>
  );
}
