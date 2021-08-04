export const getCountOddPositions = (
  maxLength: number,
  currentLength: number,
  position: number,
) => {
  const emptyPositions = maxLength - currentLength;
  if (emptyPositions <= 0) return 0;
  let counter = 0;
  for (let i = 1; i <= emptyPositions; i += 1) {
    if ((position + i) % 2 !== 0) {
      counter += 1;
    }
  }
  return counter || 1;
};

export const doubleString = (string: string, times: number) => {
  if (!times) return '';
  if (times === 1) return string;
  let result = '';
  for (let i = 0; i < times; i += 1) {
    result += string;
  }
  return result;
};

export const multiplyString = (string: string, count: number) => string.repeat(count);

export const setCursorPosition = (
  event: React.ChangeEvent<HTMLInputElement>,
  start: number,
  end: number,
) => {
  const isPositionOdd = event.target.selectionStart % 2 !== 0;
  const fixPos = isPositionOdd ? 0 : 1;
  const { inputType } = event.nativeEvent;
  const position = start === 0 ? 0 : (start - 1 + fixPos);
  switch (inputType) {
    case 'deleteContentBackward':
      event.target.setSelectionRange(position, position);
      break;
    case 'deleteContentForward':
      event.target.setSelectionRange(start + 2, end + 2);
      break;
    case 'insertText':
      event.target.setSelectionRange(start + 1, end + 1);
      break;
    default:
      break;
  }
};
export const getPlaceholder = (
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
export function replaceToMaskSymbol(
  event: React.ChangeEvent<HTMLInputElement>,
  typedValueArr: string[],
  length: number,
) {
  const { selectionStart } = event.target;
  const { inputType } = event.nativeEvent;
  const symbolLength = (length * 2 - 1);
  const valueLength = event.target.value.length;
  const digitLength = event.target.value.replaceAll(/[^0-9,'●']/g, '').length;
  let replacedString = multiplyString('●', length > digitLength ? length - digitLength : 0);
  const missedSymbolsBackward = symbolLength - valueLength === 1 ? 1 : 0;
  const missedSymbolsForward = symbolLength - valueLength !== 1 ? 1 : 0;
  const isOddPosition = selectionStart % 2 === 0 ? 1 : 0;
  switch (inputType) {
    case 'deleteContentBackward':
      typedValueArr.join('').replaceAll(/[^0-9,'●']/g, '')
        .split('')
        .join(' ')
        .split('');
      replacedString = doubleString('●', getCountOddPositions(symbolLength, typedValueArr.length, selectionStart));
      typedValueArr.splice(
        (selectionStart - missedSymbolsBackward < 0 ? 0 : selectionStart - missedSymbolsBackward),
        symbolLength - selectionStart,
        (replacedString + typedValueArr.slice(selectionStart).join('')),
      );
      break;
    case 'deleteContentForward':
      typedValueArr.splice(
        (selectionStart - missedSymbolsForward),
        symbolLength - selectionStart,
        (replacedString + typedValueArr.slice(selectionStart + 1).join('')),
      );
      break;
    case 'insertText':
      if (/[^0-9, \s, '●']/.test(event.target.value)) {
        typedValueArr.splice((selectionStart - 1 < 0 ? 0 : selectionStart - 1), 1);
        typedValueArr.splice(
          (selectionStart - 1 < 0 ? 0 : selectionStart - 1),
          typedValueArr.length - (selectionStart - 1),
          replacedString + typedValueArr.slice((selectionStart - 1 < 0 ? 0 : selectionStart - 1)).join(''),
        );
      }
      if (typedValueArr.join('').replaceAll(/[^0-9,'●']/g, '').length === length) {
        return typedValueArr.join('')
          .replaceAll(/[^0-9,'●']/g, '')
          .split('')
          .join(' ');
      }
      if (typedValueArr.length === 1) {
        typedValueArr.splice(selectionStart, 1, replacedString);
      } else if (symbolLength < typedValueArr.length) {
        if (selectionStart === typedValueArr.length) typedValueArr.splice(selectionStart - 1, 1, '');
        if (selectionStart < typedValueArr.length && !isOddPosition) typedValueArr.splice(selectionStart, 1, '');
        if (selectionStart < typedValueArr.length && isOddPosition) typedValueArr.splice(selectionStart + 1, 1, '');
      } else {
        typedValueArr.splice(selectionStart, typedValueArr.length - (selectionStart - 1), replacedString + typedValueArr.slice(selectionStart).join(''));
      }
      break;
    default:
      break;
  }
  // Удаление некорректных пробелов
  // Добавление пробелов между символами
  return typedValueArr.join('')
    .replaceAll(/\s/g, '')
    .split('')
    .join(' ');
}
