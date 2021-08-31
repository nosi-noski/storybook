import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../components/UI/Button';

export default {
  title: 'UI/Component/Button',
  component: Button,
  argTypes: {
    assign: {
      options: ['contained', 'outlined', 'plain'],
      control: { type: 'radio' },
      defaultValue: 'contained',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      defaultValue: 'small',
    },
  },

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const General = Template.bind({});
General.args = {
  children: 'Button',
};
