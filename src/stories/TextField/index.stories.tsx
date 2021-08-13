import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField as MuiTextField, TextFieldSizeVariants } from '../../components/UI/TextField';

interface Props {
  value: string;
  size: 'small' | 'medium' | 'large';
  isError?: boolean;
  helperText?: string;
}

function TextField({
  value,
  size,
  isError = false,
  helperText = '',
}:Props) {
  const [fieldValue, setFieldValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.value);
  };
  return (
    <MuiTextField
      value={fieldValue}
      onChange={handleChange}
      helperText={helperText}
      error={isError}
      size={size}
    />
  );
}

export default {
  title: 'UI/Component/TextField',
  component: TextField,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;
export const General = Template.bind({});
General.args = {
  isError: false,
  helperText: '',
};
