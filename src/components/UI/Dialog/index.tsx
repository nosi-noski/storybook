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
  scrollable?: boolean;
  onClose: () => void;
  title?: JSX.Element | string;
  content?: JSX.Element | string;
  actions?: JSX.Element;
}

Dialog.defaultProps = {
  title: undefined,
  content: undefined,
  actions: undefined,
  scrollable: false,
};

export function Dialog({
  title,
  content,
  actions,
  isOpen,
  onClose,
  scrollable,
}: Props) {
  return (
    <MuiDialog open={isOpen}>
      <DialogTitle size="Size5">
        <Title>{title}</Title>
        <IconButton
          assign="plain"
          size="small"
          onClick={onClose}
          startIcon={<Icon iconName="close" />}
        />
      </DialogTitle>
      {content && (
        <DialogContent dividers={scrollable}>
          <DialogContentText size="Size2">
            {content}
          </DialogContentText>
        </DialogContent>
      )}
      {actions && <DialogActions>{actions}</DialogActions>}
    </MuiDialog>
  );
}
