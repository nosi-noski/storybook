import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Dialog } from '../../components/UI/Dialog';
import { Button } from '../../components/UI/Button';

export default {
  title: 'Example/Dialog',
  component: Dialog,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'Заголовок диалогового окна',
  content: `Содержимое диалогового окна Содержимое диалогового окна
  Содержимое диалогового окна Содержимое диалогового окна Содержимое диалогового окна
  Содержимое диалогового окна Содержимое диалогового окна Содержимое диалогового окна
  Содержимое диалогового окна Содержимое диалогового окна Содержимое диалогового окна`,
  actions: (
    <>
      <Button assign="outlined" size="small" onClick={action('Отмена')}>Отмена</Button>
      <Button assign="contained" size="small" onClick={action('Сохранить')}>Сохранить</Button>
    </>
  ),
  isOpen: true,
  scrollable: false,
  onClose: action('Закрыть'),
};
