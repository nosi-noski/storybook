import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Banner } from '../../components/UI/Banner';

export default {
  title: 'UI/Component/Banner',
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;
export const General = Template.bind({});
General.args = {
  title: 'Мы не смогли получить ваши данные с Госуслуг.',
};

export const Info = Template.bind({});
Info.args = {
  title: 'Мы не смогли получить ваши данные с Госуслуг.',
  color: 'info',
  buttons: [{
    label: 'Вернуться и попробовать ещё раз',
    onClick: action('Клик по кнопке'),
  }],
};

export const Success = Template.bind({});
Success.args = {
  title: 'Мы не смогли получить ваши данные с Госуслуг.',
  color: 'success',
  buttons: [{
    label: 'Запонить вручную',
    onClick: action('Клик по кнопке'),
  }],
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Мы не смогли получить ваши данные с Госуслуг.',
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
  title: 'Мы не смогли получить ваши данные с Госуслуг. Попробуйте ещё раз или заполните вручную.',
  buttons: [
    {
      label: 'Запонить вручную',
      onClick: action('Клик по кнопке "Заполнить вручную"'),
    },
  ],
};
