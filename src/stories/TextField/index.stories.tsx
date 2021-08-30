import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from '../../components/UI/TextField';

export default {
  title: 'UI/Component/TextField',
  component: TextField,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      defaultValue: 'small',
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;
export const General = Template.bind({});
General.args = {
  error: true,
  helperText: 'helperText',
};
