import React, { useState, useEffect } from 'react';
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
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    let typedValue = event.target.value;
    typedValue = typedValue.replaceAll(/[^0-9]/g, '');

    if (typedValue.length > length) {
      typedValue = typedValue.substring(0, length);
      return;
    }
    if (event.nativeEvent.inputType === 'deleteContentBackward') {
      event.target.selectionEnd = typedValue.length;
      event.target.selectionStart = typedValue.length;
      console.log('deleteContentBackward');
    }

    if (event.nativeEvent.inputType === 'insertText') {
      event.target.selectionEnd = typedValue.length;
      event.target.selectionStart = typedValue.length;
      console.log('insertText');
    }
    const remainingLength = length - typedValue.length;
    typedValue += getPlaceholder(remainingLength, '●');
    event.target.value = typedValue;
    onChange(event);
  };
  const getPlaceholder = (placeholderLength: (number | undefined), char: string) => {
    if (!placeholderLength) return '';
    if (placeholderLength === 1) return char;
    let string = char;
    for (let i = 1; i < placeholderLength; i += 1) {
      string += char;
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
    <TextField
      type="string"
      placeholder={getPlaceholder(length, '●')}
      value={value}
      onChange={handleChange}
      size={size}
      error={isError}
      helperText={helperText}
      length={length}
      inputProps={inputProps}
    />
  );
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
    console.log('handleBlur', event);
    const typedValue = event.target.value.replaceAll(/[^0-9]/g, '');
    event.target.value = typedValue.length === 0 ? '' : event.target.value;
  };
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log('handleClick', event);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { selectionStart, selectionEnd } = event.target;
    console.log('handleChange', event);
    const symbolLength = (length * 2 - 1);
    debugger; // eslint-disable-line no-debugger
    console.log('event.target.selectionStart', selectionStart);
    console.log('event.target.selectionEnd', selectionEnd);

    // Если удаляли пробел, то удаляем и символ перед ним, иначе символ и пробел перед ним
    if (event.nativeEvent.inputType === 'deleteContentBackward') {
      const typedValueArr = event.target.value.split('');
      typedValueArr.splice((event.target.selectionStart || 0) - 1, 1);
      event.target.value = typedValueArr.join(' ');
    }

    let typedValue = event.target.value.replaceAll(/[^0-9]/g, '');

    if (typedValue.length > length) {
      typedValue = typedValue.substring(0, length);
    }

    const remainingLength = length - typedValue.length;
    typedValue = typedValue.split('').join(' ');
    typedValue += getPlaceholder((typedValue.length === 0), remainingLength, '●');
    event.target.value = typedValue;
    if (event.nativeEvent.inputType === 'deleteContentBackward') {
      const position = selectionStart === 0 ? 0 : (selectionStart - 1);
      event.target.setSelectionRange(position, position);
      console.log('deleteContentBackward');
    }

    if (event.nativeEvent.inputType === 'insertText') {
      event.target.setSelectionRange(selectionStart + 1, selectionEnd + 1);
      console.log('insertText');
    }
    onChange(event);
  };
  const getPlaceholder = (
    isStart: boolean,
    placeholderLength: (number | undefined),
    char: string,
  ) => {
    if (!placeholderLength) return '';

    let string = (isStart && char) || (!isStart && ` ${char}`);

    if (placeholderLength === 1) {
      return string;
    }

    for (let i = 1; i < placeholderLength; i += 1) {
      string += ` ${char}`;
    }
    return string;
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
