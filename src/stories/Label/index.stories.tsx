import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from '../../components/UI/Label';

export default {
  title: 'UI/Component/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  children: 'Информация',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  children: 'Успешно',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  children: 'Предупреждение',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  children: 'Ошибка',
};

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  children: 'Нейтральный',
};
