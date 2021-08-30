import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Popover } from '../../components/UI/Popover';
import { Button } from '../../components/UI/Button';

export default {
  title: 'UI/Component/Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Helper = Template.bind({});
Helper.args = {
  type: 'helper',
  arrow: true,
  open: true,
  disableFocusListener: true,
  disableHoverListener: true,
  disableTouchListener: true,
  children: <Button>Click me</Button>,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque quam viverra tristique cursus. Maecenas sit amet molestie augue, nec egestas magna. Ut id libero erat. Nulla ac erat eu velit lacinia molestie in id leo. Etiam congue justo vestibulum tortor sodales lacinia. Etiam viverra consectetur dapibus. Duis vitae tortor metus. Sed accumsan arcu ex, ut ornare lorem aliquam sit amet. Fusce eget dolor velit. Etiam sed quam non turpis dignissim laoreet. Mauris et enim eu ipsum dignissim tincidunt. Pellentesque id sem lacus. In molestie urna in sem pulvinar tristique.',
};

export const Onboarding = Template.bind({});
Onboarding.args = {
  type: 'onboarding',
  arrow: true,
  open: true,
  disableFocusListener: true,
  disableHoverListener: true,
  disableTouchListener: true,
  children: <Button>Click me</Button>,
  content: [
    {
      title: 'Загловок',
      content: 'Теперь вы можете отправлять заявку в HelpDesk силой мысли',
      actions: [
        {
          label: 'Кнопка',
          onClick: action('Кнопка'),
        },
      ],
    },
  ],
};

export const Slides = Template.bind({});
Slides.args = {
  type: 'onboarding',
  arrow: true,
  open: true,
  children: <Button>Click me</Button>,
  disableFocusListener: true,
  disableHoverListener: true,
  disableTouchListener: true,
  content: [
    {
      title: 'Первый слайд',
      content: 'Теперь вы можете отправлять заявку в HelpDesk силой мысли',
      actions: [
        {
          label: 'Назад',
          type: 'back',
          onClick: action('Назад'),
        },
        {
          label: 'Далее',
          type: 'next',
          onClick: action('Далее'),
        },
      ],
    },
    {
      title: 'Второй слайд',
      content: 'Теперь вы можете отправлять заявку в HelpDesk силой мысли 2',
      actions: [
        {
          label: 'Назад',
          type: 'back',
          onClick: action('Назад'),
        },
        {
          label: 'Далее',
          type: 'next',
          onClick: action('Далее'),
        },
      ],
    },
    {
      title: 'Третий слайд',
      content: 'Теперь вы можете отправлять заявку в HelpDesk силой мысли 3',
      actions: [
        {
          label: 'Назад',
          type: 'back',
          onClick: action('Назад'),
        },
        {
          label: 'Далее',
          type: 'next',
          onClick: action('Далее'),
        },
      ],
    },
    {
      title: 'Четвёртый слайд',
      content: 'Теперь вы можете отправлять заявку в HelpDesk силой мысли 4',
      actions: [
        {
          label: 'Назад',
          type: 'back',
          onClick: action('Назад'),
        },
        {
          label: 'Далее',
          type: 'next',
          onClick: action('Далее'),
        },
      ],
    },
    {
      title: 'Пятый слайд',
      content: 'Теперь вы можете отправлять заявку в HelpDesk силой мысли 5',
      actions: [
        {
          label: 'Назад',
          type: 'back',
          onClick: action('Назад'),
        },
        {
          label: 'Далее',
          type: 'next',
          onClick: action('Далее'),
        },
      ],
    },
  ],
};
