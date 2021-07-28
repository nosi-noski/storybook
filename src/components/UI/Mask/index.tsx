import React from 'react';
import MaskInput from 'react-input-mask';

interface MaskProps {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  mask: string | (string | RegExp)[];
  maskPlaceholder?: string;
  children?: JSX.Element;
}

export function Mask({
  value,
  onChange,
  mask,
  placeholder,
  maskPlaceholder,
  children,
}:MaskProps) {
  return (
    <MaskInput
      value={value}
      onChange={onChange}
      mask={mask}
      placeholder={placeholder}
      maskPlaceholder={maskPlaceholder}
    >
      {children}
    </MaskInput>
  );
}
