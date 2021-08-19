import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip as MuiToolTip } from '../../components/UI/Tooltip';

interface Props {
  title: string;
}
function Tooltip({ title }:Props) {
  return (
    <MuiToolTip title={title}>
      <span>Наведите курсор</span>
    </MuiToolTip>
  );
}

export default {
  title: 'UI/Component/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const General = Template.bind({});
General.args = {
  title: 'Не удалось получить уведомления',
};
