import React from 'react';
import { Typography, ColorTypographyVariants } from './styles';

interface Props {
  type: keyof typeof ColorTypographyVariants;
  children?: string | JSX.Element;
}

Label.defaultProps = {
  children: '',
};

export function Label({ type, children }: Props) {
  return (
    <Typography assign={type}>
      {children}
    </Typography>
  );
}
