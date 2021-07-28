import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import MaskInput from 'react-input-mask';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Mask } from '../../components/UI/Mask';
import { TextField } from './styles';

interface Props {
  size: 'small' | 'medium' | undefined ;
  value?: string;
  error?: boolean;
  helperText?: string;
  mask: string | (string | RegExp)[];
  placeholder?: string;
  maskPlaceholder?: string;
}

function OTP({
  size,
  value,
  error,
  helperText,
  mask,
  placeholder,
  maskPlaceholder,
}:Props) {
  const [otpValue, setOtpValue] = useState(value);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const typedValue = event.target.value;
    setOtpValue(typedValue);
  };
  const inputRef = useRef<HTMLDivElement | null>(null);
  const calcWidth = useCallback(() => {
    const input = inputRef.current;
    const length = mask?.length || placeholder?.length || 5;
    console.log('length', length);
    const width = 32 + 32 + 2 + 2 + 9 * (length);
    if (input) {
      input.style.width = `${width}px`;
    }
  }, [mask, placeholder]);
  useEffect(() => {
    calcWidth();
  }, [calcWidth]);
  return (
    <Mask
      value={otpValue}
      onChange={handleChange}
      mask={mask}
      placeholder={placeholder}
      maskPlaceholder={maskPlaceholder}
    >
      <TextField
        ref={inputRef}
        error={error}
        helperText={helperText}
        size={size}
      />
    </Mask>
  );
}

export default {
  title: 'UI/Component/OTP',
  component: OTP,
} as ComponentMeta<typeof OTP>;

const Template: ComponentStory<typeof OTP> = (args) => <OTP {...args} />;

export const FourDigits = Template.bind({});
FourDigits.args = {
  size: 'medium',
  value: '',
  error: false,
  helperText: '',
  mask: [/\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/],
  placeholder: '● ● ● ●',
  maskPlaceholder: '●',
};

export const FiveDigits = Template.bind({});
FiveDigits.args = {
  size: 'medium',
  value: '',
  error: false,
  helperText: 'helperText',
  mask: [/\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/],
  placeholder: '● ● ● ● ●',
  maskPlaceholder: '●',
};

export const SixDigits = Template.bind({});
SixDigits.args = {
  size: 'medium',
  value: '',
  error: false,
  helperText: '',
  mask: [/\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/],
  placeholder: '● ● ● ● ● ●',
  maskPlaceholder: '●',
};
