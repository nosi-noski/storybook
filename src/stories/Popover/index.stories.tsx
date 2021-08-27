import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Typography } from '../../components/UI/Typography';
import { Button } from '../../components/UI/Button';
import { TextField } from '../../components/UI/TextField';

import { Popover as MuiPopover } from '../../components/UI/Popover';
import { TSlides } from '../../components/UI/Popover/Onboarding';

interface Props {
  type?: 'helper' | 'onboarding';
  content: string | TSlides;
  arrow?: boolean;
  children?: React.ReactElement;
}

function Popover({
  type,
  content,
  arrow,
  children,
}:Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MuiPopover
      type={type}
      content={content}
      arrow={arrow}
      open={isOpen}
      setIsOpen={setIsOpen}
    ><Button onClick={handleClick}>Кликните по кнопке</Button>
    </MuiPopover>
  );
}

export default {
  title: 'UI/A_Draft/Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Helper = Template.bind({});
Helper.args = {
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque quam viverra tristique cursus. Maecenas sit amet molestie augue, nec egestas magna. Ut id libero erat. Nulla ac erat eu velit lacinia molestie in id leo. Etiam congue justo vestibulum tortor sodales lacinia. Etiam viverra consectetur dapibus. Duis vitae tortor metus. Sed accumsan arcu ex, ut ornare lorem aliquam sit amet. Fusce eget dolor velit. Etiam sed quam non turpis dignissim laoreet. Mauris et enim eu ipsum dignissim tincidunt. Pellentesque id sem lacus. In molestie urna in sem pulvinar tristique.',
  type: 'helper',
};

export const Onboarding = Template.bind({});
Onboarding.args = {
  type: 'onboarding',
  arrow: true,
  content: [
    {
      title: 'Загловок',
      content: 'Теперь вы можете отправлять заявку в HelpDesk силой мысли',
      actions: [
        {
          label: 'Закрыть',
          type: 'close',
          onClick: action('Закрыть'),
        },
      ],
    },
  ],
};

export const Slides = Template.bind({});
Slides.args = {
  type: 'onboarding',
  arrow: true,
  content: [
    {
      title: 'Первый слайд',
      content: 'Теперь вы можете отправлять заявку в HelpDesk силой мысли',
      actions: [
        {
          label: 'Закрыть',
          type: 'close',
          onClick: action('Закрыть'),
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
      content: 'Теперь вы можете отправлять заявку в HelpDesk силой мысли',
      actions: [
        {
          label: 'Закрыть',
          type: 'close',
          onClick: action('Закрыть'),
        },
        {
          label: 'Назад',
          type: 'back',
          onClick: action('Назад'),
        },
      ],
    },
  ],
};
