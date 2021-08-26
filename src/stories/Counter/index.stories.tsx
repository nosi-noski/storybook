import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Counter as MuiCounter } from '../../components/UI/Counter';
import { IconButton } from '../../components/UI/IconButton';
import { Icon } from '../../components/UI/Icon';

interface Props {
  count?: number;
  color?: 'error' | 'warning';
  isError?: boolean;
  onClick: () => void;
}
function Counter({
  count,
  color,
  isError,
  onClick,
}:Props) {
  return (
    <MuiCounter
      count={count}
      color={color}
      isError={isError}
    >
      <IconButton
        assign="plain"
        size="small"
        startIcon={<Icon iconName="notification" />}
        onClick={onClick}
      />
    </MuiCounter>
  );
}

export default {
  title: 'UI/Component/Counter',
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
  count: 1200,
  color: 'red',
  isError: false,
};
