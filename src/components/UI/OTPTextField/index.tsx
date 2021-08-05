import React, { useMemo } from 'react';
import {
  getPlaceholder,
  setCursorPosition,
  replaceToMaskSymbol,
} from './utils';

import { TextField } from './styles';

interface Props {
  size: 'small' | 'medium' | 'large' ;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  helperText?: string;
  length?: number;
  inputProps?: { maxLength: number };
}
export function OTPTextField({
  size,
  value,
  onChange,
  isError,
  helperText,
  length = 4,
  inputProps,
}:Props) {
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const typedValue = event.target.value.replaceAll(/[^0-9]/g, '');
    event.target.value = typedValue.length === 0 ? '' : event.target.value;
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { selectionStart, selectionEnd } = event.target;
    const startPosition = selectionStart || 0;
    const endPosition = selectionEnd || 0;
    const typedValueArr = event.target.value.split('');
    // Подготовка массива символов без контроля пробелов.
    event.target.value = replaceToMaskSymbol(event, typedValueArr, length);
    // Установка курсора в корректное положение
    setCursorPosition(event, startPosition, endPosition);
    onChange(event);
  };
  const memoizedGetPlaceholder = useMemo(() => getPlaceholder(length), [length]);
  return (
    <TextField
      placeholder={memoizedGetPlaceholder}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      size={size}
      error={isError}
      helperText={helperText}
      length={length}
      inputProps={inputProps}
    />
  );
}
