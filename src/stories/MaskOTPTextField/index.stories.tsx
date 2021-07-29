import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import MaskInput from 'react-input-mask';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MaskOTPTextField } from '../../components/UI/MaskOTPTextField';
import { TextField } from '../../components/UI/TextField';

interface Props {
  size: 'small' | 'medium' | 'large' ;
  isError?: boolean;
  helperText?: string;
  length?: number;
}

function OTPTextField({
  size,
  isError,
  helperText,
  length,
}:Props) {
  const [otpValue, setOtpValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const typedValue = event.target.value;
    setOtpValue(typedValue);
  };
  useEffect(() => {}, [length]);
  return (
    <MaskOTPTextField
      value={otpValue}
      onChange={handleChange}
      size={size}
      isError={isError}
      helperText={helperText}
      length={length}
    />
  );
}

export default {
  title: 'UI/Component/MaskOTPTextField',
  component: OTPTextField,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof OTPTextField>;

const Template: ComponentStory<typeof OTPTextField> = (args) => <OTPTextField {...args} />;

export const FourDigits = Template.bind({});
FourDigits.args = {
  isError: false,
  helperText: '',
  length: 4,
};
