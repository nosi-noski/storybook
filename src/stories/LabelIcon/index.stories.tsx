import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from '../../components/UI/Label';
import { Icon } from '../../components/UI/Icon';

export default {
  title: 'UI/Component/LabelIcon',
  component: Label,
  argTypes: {
    type: {
      control: { type: 'string' },
    },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  children: (<Icon iconName="add" />),
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  children: (<Icon iconName="check" />),
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  children: (<Icon iconName="info" />),
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  children: (<Icon iconName="close" />),
};

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  children: (<Icon iconName="question_circled" />),
};
