import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import MaskInput from 'react-input-mask';

import { Mask } from './styles';
import { TextField } from '../TextField';

interface Props {
  size: 'small' | 'medium' | 'large' ;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  helperText?: string;
  length?: number;
}

export function MaskOTPTextField({
  size,
  value,
  onChange,
  isError,
  helperText,
  length = 4,
}:Props) {
  const getPlaceholder = (placeholderLength: (number | undefined), char: string) => {
    if (!placeholderLength) return '';
    if (placeholderLength === 1) return char;
    let string = char;
    for (let i = 1; i < placeholderLength; i += 1) {
      string += ` ${char}`;
    }
    return string;
  };

  const getMask = (maskLength: (number | undefined)) => {
    if (!maskLength) return [];
    if (maskLength === 1) return [/\d/];
    const maskArray: (RegExp | string)[] = [/\d/];
    for (let i = 1; i < maskLength; i += 1) {
      maskArray.push(...[' ', /\d/]);
    }
    return maskArray;
  };
  return (
    <Mask
      length={length}
      value={value}
      onChange={onChange}
      mask={getMask(length)}
      placeholder={getPlaceholder(length, '●')}
      maskPlaceholder="●"
    >
      <TextField
        error={isError}
        helperText={helperText}
        size={size}
      />
    </Mask>
  );
}
