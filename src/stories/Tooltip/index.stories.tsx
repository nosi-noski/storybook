import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label } from '../../components/UI/Label';
import { Tooltip } from '../../components/UI/Tooltip';

export default {
  title: 'UI/Component/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const General = Template.bind({});
General.args = {
  title: 'Не удалось получить уведомления',
  children: <span>Наведите курсор</span>,
};
