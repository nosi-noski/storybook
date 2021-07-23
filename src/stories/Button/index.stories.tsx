import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button as MuiButton } from '../../components/UI/Button';

interface Props {
  label?: string;
  assign?: 'contained' | 'outlined' | 'plain';
  size?: 'small' | 'medium' | 'large';
}

const Button = ({ assign = 'contained', size = 'small', label = 'Button1' }:Props) => (
  <MuiButton
    assign={assign}
    size={size}
  >
    {label}
  </MuiButton>
);

Button.defaultProps = {
  label: 'Button1',
  assign: 'contained',
  size: 'small',
};

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    assign: {
      options: ['contained', 'outlined', 'plain'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const General = Template.bind({});
General.args = {
  label: 'Button',
  assign: 'contained',
  size: 'small',
};
