import React from 'react';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';

import {
  Dialog as MuiDialog,
  DialogTitle,
  Title,
  DialogContent,
  DialogContentText,
  DialogActions,
} from './styles';

interface Props {
  isOpen: boolean;
  isScrollable?: boolean;
  onClose: () => void;
  title?: JSX.Element | string;
  content?: JSX.Element | string;
  actions?: JSX.Element;
}

export function Dialog({
  title,
  content,
  actions,
  isOpen,
  onClose,
  isScrollable = false,
}: Props) {
  return (
    <MuiDialog open={isOpen}>
      <DialogTitle variant="h5">
        <Title>{title}</Title>
        <IconButton
          assign="plain"
          size="small"
          onClick={onClose}
          startIcon={<Icon iconName="close" />}
        />
      </DialogTitle>
      {content && (
        <DialogContent dividers={isScrollable}>
          <DialogContentText variant="body2">
            {content}
          </DialogContentText>
        </DialogContent>
      )}
      {actions && <DialogActions>{actions}</DialogActions>}
    </MuiDialog>
  );
}
