import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Dialog } from '../../components/UI/Dialog';
import { Button } from '../../components/UI/Button';

interface ActionsProps {
  onSubmit?: () => void;
  onClose?: () => void;
}

Actions.defaultProps = {
  onSubmit: undefined,
  onClose: undefined,
};
function Actions({ onSubmit, onClose }: ActionsProps) {
  return (
    <>
      <Button assign="outlined" size="small" onClick={onSubmit}>Отмена</Button>
      <Button assign="contained" size="small" onClick={onClose}>Сохранить</Button>
    </>
  );
}

interface Props {
  isOpen: boolean;
  scrollable?: boolean;
  onClose: () => void;
  title?: JSX.Element | string;
  content?: JSX.Element | string;
  actions?: JSX.Element;
}

DialogExample.defaultProps = {
  title: undefined,
  content: undefined,
  actions: undefined,
  scrollable: false,
};

function DialogExample({
  title,
  content,
  isOpen,
  onClose,
  scrollable,
  actions,
}: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(isOpen);
  const handleClose = () => {
    setIsDialogOpen(false);
    onClose();
  };
  useEffect(() => {}, [isOpen]);
  return (
    <Dialog
      title={title}
      isOpen={isDialogOpen}
      content={content}
      isScrollable={scrollable}
      onClose={handleClose}
      actions={
        (!!actions && actions)
        || (
          <Actions
            onClose={handleClose}
            onSubmit={handleClose}
          />
        )
        }
    />
  );
}

export default {
  title: 'Default/DialogExample',
  component: Dialog,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <DialogExample {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'Заголовок диалогового окна',
  content: `Содержимое диалогового окна Содержимое диалогового окна
  Содержимое диалогового окна Содержимое диалогового окна Содержимое диалогового окна
  Содержимое диалогового окна Содержимое диалогового окна Содержимое диалогового окна
  Содержимое диалогового окна Содержимое диалогового окна Содержимое диалогового окна`,
  isOpen: true,
  isScrollable: false,
  onClose: action('Закрыть'),
  actions: undefined,
};
