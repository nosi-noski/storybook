import React, { useMemo } from 'react';

import {
  getPlaceholder,
  setCursorPosition,
  replaceToMaskSymbol,
} from './utils';
import { TextFieldProps } from './interface';
import { TextField } from './styles';

export function OTPTextField({
  length = 4,
  placeholder,
  onChange,
  onBlur,
  ...props
}:TextFieldProps) {
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
    onChange?.(event);
  };
  const memoizedGetPlaceholder = useMemo(() => getPlaceholder(length), [length]);
  return (
    <TextField
      {...props}
      length={length}
      placeholder={memoizedGetPlaceholder}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
}
