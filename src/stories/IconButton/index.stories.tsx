import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Icon } from '../../components/UI/Icon';
import { IconButton } from '../../components/UI/IconButton';

export default {
  title: 'UI/Component/ButtonIcon',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Close = Template.bind({});
Close.args = {
  assign: 'outlined',
  size: 'small',
  onClick: () => { action('Клик'); },
  startIcon: <Icon iconName="close" />,
};

export const ArrowLeft = Template.bind({});
ArrowLeft.args = {
  assign: 'outlined',
  size: 'small',
  onClick: () => { action('Клик'); },
  startIcon: <Icon iconName="arrow_left" />,
};

export const ArrowRight = Template.bind({});
ArrowRight.args = {
  assign: 'outlined',
  size: 'small',
  onClick: () => { action('Клик'); },
  startIcon: <Icon iconName="arrow_right" />,
};
