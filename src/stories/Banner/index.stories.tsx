import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Banner as MuiBanner, ButtonProps } from '../../components/UI/Banner';

interface Props {
  title: string;
  isShown: boolean
  color: string;
  buttons?: ButtonProps[];
  verticalAlign: string;
  horizontalAlign: string;
}

function Banner({
  title,
  isShown,
  color,
  buttons,
  verticalAlign,
  horizontalAlign,
}:Props) {
  return (
    <MuiBanner
      title={title}
      isShown={isShown}
      color={color}
      buttons={buttons}
      verticalAlign={verticalAlign}
      horizontalAlign={horizontalAlign}
    />
  );
}

export default {
  title: 'Z_Draft/Banner',
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;
export const General = Template.bind({});
General.args = {
  isShown: true,
};

export const Info = Template.bind({});
Info.args = {
  title: 'Мы не смогли получить ваши данные с Госуслуг.',
  isShown: true,
  color: 'info',
  buttons: [{
    label: 'Вернуться и попробовать ещё раз',
    onClick: action('Клик по кнопке'),
  }],
};

export const Success = Template.bind({});
Success.args = {
  title: 'Мы не смогли получить ваши данные с Госуслуг.',
  isShown: true,
  color: 'success',
  buttons: [{
    label: 'Запонить вручную',
    onClick: action('Клик по кнопке'),
  }],
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Мы не смогли получить ваши данные с Госуслуг.',
  isShown: true,
  color: 'warning',
  buttons: [{
    label: 'Запонить вручную',
    onClick: action('Клик по кнопке'),
  }],
};

export const Error = Template.bind({});
Error.args = {
  title: 'Мы не смогли получить ваши данные с Госуслуг.',
  color: 'error',
  isShown: true,
  buttons: [
    {
      label: 'Запонить вручную',
      onClick: action('Клик по кнопке "Заполнить вручную"'),
    },
    {
      label: 'Повторить',
      onClick: action('Клик по кнопке "Повторить"'),
    },
  ],
};

export const Gradient = Template.bind({});
Gradient.args = {
  title: 'Мы не смогли получить ваши данные с Госуслуг.',
  color: 'gradient',
  isShown: true,
  buttons: [
    {
      label: 'Запонить вручную',
      onClick: action('Клик по кнопке "Заполнить вручную"'),
    },
    {
      label: 'Повторить',
      onClick: action('Клик по кнопке "Повторить"'),
    },
  ],
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  isShown: true,
  title: 'Мы не смогли получить ваши данные с Госуслуг. Попробуйте ещё раз или заполните вручную.',
  buttons: [
    {
      label: 'Запонить вручную',
      onClick: action('Клик по кнопке "Заполнить вручную"'),
    },
  ],
};
