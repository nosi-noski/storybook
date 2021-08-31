import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OTPTextField } from '../../components/UI/OTPTextField';

export default {
  title: 'UI/Component/OTPTextField',
  component: OTPTextField,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      defaultValue: 'small',
    },
    length: {
      defaultValue: 4,
    },
  },
} as ComponentMeta<typeof OTPTextField>;

const Template: ComponentStory<typeof OTPTextField> = (args) => <OTPTextField {...args} />;
export const General = Template.bind({});
General.args = {
  helperText: 'helperText',
  error: false,
};
