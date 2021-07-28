import React from 'react';

import { IconButton as MuiIconButton } from './styles';

interface Props {
  assign?: 'outlined' | 'plain';
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
  startIcon?: JSX.Element;
}

export function IconButton({
  assign = 'outlined',
  size = 'small',
  onClick,
  startIcon,
}:Props) {
  return (
    <MuiIconButton
      assign={assign}
      size={size}
      onClick={onClick}
      startIcon={startIcon}
    />
  );
}
