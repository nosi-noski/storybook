import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OTPTextField as MuiOTPTextField, OTPTextField1 as MuiOTPTextField1 } from '../../components/UI/OTPTextField';

interface Props {
  value: string;
  size: 'small' | 'medium' | 'large';
  isError?: boolean;
  helperText?: string;
  length?: number;
}

function OTPTextField({
  value,
  size,
  isError,
  helperText,
  length = 4,
}:Props) {
  const [otpValue, setOtpValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // debugger; // eslint-disable-line no-debugger
    setOtpValue(event.target.value);
  };
  return (
    <>
      <MuiOTPTextField1
        helperText={helperText}
        isError={isError}
        value={value}
        onChange={handleChange}
        size={size}
        length={length}
      />
    </>
  );
}

export default {
  title: 'UI/Component/OTPTextField',
  component: OTPTextField,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof OTPTextField>;

const Template: ComponentStory<typeof OTPTextField> = (args) => <OTPTextField {...args} />;
export const General = Template.bind({});
General.args = {
  isError: false,
  helperText: '',
  length: 4,
};
