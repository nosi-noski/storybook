import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { Dialog as MuiDialog } from '../../components/UI/Dialog';
import { Button } from '../../components/UI/Button';

const Dialog = styled(MuiDialog)`
  .MuiDialog-root {
    position: relative;
  }
`;

export default {
  title: 'UI/Component/Dialog',
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
  isScrollable: false,
  onClose: action('Закрыть'),
};
