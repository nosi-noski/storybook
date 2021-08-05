enum InputType {
  Backspace = 'deleteContentBackward',
  Delete = 'deleteContentForward',
  InsertText = 'insertText',
}
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

export const doubleString = (amount: number) => {
  if (!amount) return '';
  if (amount === 1) return '●';
  let result = '';
  for (let i = 0; i < amount; i += 1) {
    result += '●';
  }
  return result;
};

const multiplyString = (maxLength: number, currentLength: number) => {
  const count = maxLength > currentLength ? maxLength - currentLength : 0;
  return '●'.repeat(count);
};

export const setCursorPosition = (
  event: React.ChangeEvent<HTMLInputElement>,
  start: number,
  end: number,
) => {
  const startPosition = event.target.selectionStart || 0;
  const isPositionOdd = startPosition % 2 !== 0;
  const fixPos = isPositionOdd ? 0 : 1;
  const { inputType } = event.nativeEvent;
  const position = start === 0 ? 0 : (start - 1 + fixPos);
  switch (inputType) {
    case InputType.Backspace:
      event.target.setSelectionRange(position, position);
      break;
    case InputType.Delete:
      event.target.setSelectionRange(start + 2, end + 2);
      break;
    case InputType.InsertText:
      event.target.setSelectionRange(start + 1, end + 1);
      break;
    default:
      break;
  }
};

// Что с параметрами и useMEmo
export const getPlaceholder = (
  placeholderLength: (number | undefined),
) => {
  if (!placeholderLength) return '';
  let string = '●';
  if (placeholderLength === 1) {
    return string;
  }
  for (let i = 1; i < placeholderLength; i += 1) {
    string += ' ●';
  }
  return string;
};
const backspaceHandler = (
  event: React.ChangeEvent<HTMLInputElement>,
  typedValueArr: string[],
  maxLength: number,
) => {
  const startPosition = event.target.selectionStart || 0;
  const symbolLength = (maxLength * 2 - 1);
  const valueLength = event.target.value.length;
  const missedSymbolsBackward = symbolLength - valueLength === 1 ? 1 : 0;
  const replacedString = doubleString(
    getCountOddPositions(
      symbolLength,
      typedValueArr.length,
      startPosition,
    ),
  );
  typedValueArr.splice(
    (startPosition - missedSymbolsBackward < 0 ? 0 : startPosition - missedSymbolsBackward),
    symbolLength - startPosition,
    (replacedString + typedValueArr.slice(startPosition).join('')),
  );
};
const deleteHandler = (
  event: React.ChangeEvent<HTMLInputElement>,
  typedValueArr: string[],
  maxLength: number,
) => {
  const startPosition = event.target.selectionStart || 0;
  const symbolLength = (maxLength * 2 - 1);
  const valueLength = event.target.value.length;
  const digitLength = event.target.value.replaceAll(/[^0-9,'●']/g, '').length;
  const missedSymbolsForward = symbolLength - valueLength !== 1 ? 1 : 0;
  const replacedString = multiplyString(maxLength, digitLength);
  typedValueArr.splice(
    (startPosition - missedSymbolsForward),
    symbolLength - startPosition,
    (replacedString + typedValueArr.slice(startPosition + 1).join('')),
  );
};
const insertHandler = (
  event: React.ChangeEvent<HTMLInputElement>,
  typedValueArr: string[],
  maxLength: number,
) => {
  const startPosition = event.target.selectionStart || 0;
  const digitLength = event.target.value.replaceAll(/[^0-9,'●']/g, '').length;
  const replacedString = multiplyString(maxLength, digitLength);
  const symbolLength = (maxLength * 2 - 1);
  const isOddPosition = startPosition % 2 === 0 ? 1 : 0;
  // Если ввели букву
  if (/[^0-9, \s, '●']/.test(event.target.value)) {
    typedValueArr.splice((startPosition - 1 < 0 ? 0 : startPosition - 1), 1);
    typedValueArr.splice(
      (startPosition - 1 < 0 ? 0 : startPosition - 1),
      typedValueArr.length - (startPosition - 1),
      replacedString + typedValueArr.slice((startPosition - 1 < 0 ? 0 : startPosition - 1)).join(''),
    );
  }
  // Если выделили цифру\кружок и ввели цифру (количество символов(не пробелов) не изменилось)
  if (typedValueArr.join('').replaceAll(/[^0-9,'●']/g, '').length === maxLength) {
    return;
  }
  // Если ввели первый символ в инпут
  if (typedValueArr.length === 1) {
    typedValueArr.splice(startPosition, 1, replacedString);
  } else if (symbolLength < typedValueArr.length) {
    if (startPosition === typedValueArr.length) typedValueArr.splice(startPosition - 1, 1, '');
    if (startPosition < typedValueArr.length && !isOddPosition) typedValueArr.splice(startPosition, 1, '');
    if (startPosition < typedValueArr.length && isOddPosition) typedValueArr.splice(startPosition + 1, 1, '');
  } else {
    typedValueArr.splice(startPosition, typedValueArr.length - (startPosition - 1), replacedString + typedValueArr.slice(startPosition).join(''));
  }
};

export function replaceToMaskSymbol(
  event: React.ChangeEvent<HTMLInputElement>,
  typedValueArr: string[],
  length: number,
) {
  const { inputType } = event.nativeEvent;
  switch (inputType) {
    case InputType.Backspace:
      backspaceHandler(event, typedValueArr, length);
      break;
    case InputType.Delete:
      deleteHandler(event, typedValueArr, length);
      break;
    case InputType.InsertText:
      insertHandler(event, typedValueArr, length);
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
