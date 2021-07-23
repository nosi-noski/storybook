import React from 'react';

import { IconButton as MuiIconButton } from './styles';

interface Props {
  assign?: 'outlined' | 'plain';
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
  startIcon?: JSX.Element;
}

IconButton.defaultProps = {
  assign: undefined,
  size: undefined,
  startIcon: undefined,
};
export function IconButton({
  assign,
  size,
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
