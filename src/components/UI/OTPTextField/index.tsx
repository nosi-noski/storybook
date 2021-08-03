import React, { useState, useEffect } from 'react';
import {
  getCountOddPositions,
  doubleString,
  getPlaceholder,
  setCursorPosition,
  replaceToMaskSymbol,
} from '../../../utils/components/OTPTextField';

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
export function OTPTextField1({
  size,
  value,
  onChange,
  isError,
  helperText,
  length = 4,
  inputProps,
}:Props) {
  const [caretPos, setCaretPos] = useState(0);
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const typedValue = event.target.value.replaceAll(/[^0-9]/g, '');
    event.target.value = typedValue.length === 0 ? '' : event.target.value;
  };
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { selectionStart, selectionEnd } = event.target;
    const typedValueArr = event.target.value.split('');
    let preparedValue = '';
    let baredValue = '';
    // Подготовка массива символов без контроля пробелов.
    replaceToMaskSymbol(event, typedValueArr, length);
    // Удаление некорректных пробелов
    baredValue = typedValueArr.join('').replaceAll(/\s/g, '').replaceAll(/w/g, '');
    // Добавление пробелов между символами
    preparedValue = baredValue.split('').join(' ');
    // Передача
    event.target.value = preparedValue;
    setCursorPosition(event, selectionStart, selectionEnd);
    onChange(event);
  };
  useEffect(() => {}, [caretPos]);
  return (
    <TextField
      placeholder={getPlaceholder(true, length, '●')}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      size={size}
      error={isError}
      helperText={helperText}
      length={length}
      inputProps={inputProps}
    />
  );
}
