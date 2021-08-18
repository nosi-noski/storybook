import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Counter } from '../../components/UI/Counter';

export default {
  title: 'Z_Draft/Counter',
  component: Counter,
  argTypes: {
    color: {
      options: ['red', 'yellow'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args} />;

export const General = Template.bind({});
General.args = {
};

export const Yellow = Template.bind({});
Yellow.args = {
  count: 10,
  color: 'yellow',
};

export const Error = Template.bind({});
Error.args = {
  count: 1000,
};
