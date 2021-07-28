import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from '../../components/UI/Typography';

export default {
  title: 'UI/Component/Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'body1', 'body2', 'body3', 'subtitle1', 'subtitle2', 'subtitle3', 'caption', 'overline'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = ({ variant, title }) => (
  <Typography
    variant={variant}
  >
    {title}
  </Typography>
);

export const Info = Template.bind({});
Info.args = {
  variant: 'h1',
  title: 'Typography',
};
