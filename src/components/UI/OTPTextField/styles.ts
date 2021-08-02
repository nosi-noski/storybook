import styled, { css } from 'styled-components';
import { TextField as MuiTextField } from '../TextField';

interface Props {
  length?: number;
}
export const TextField = styled(MuiTextField)<Props>`
  ${({ length }) => {
    const calcWidth = () => {
      const charLength = length || 4;
      const padding = 64;
      const border = 2;
      const symbolLength = (charLength * 2 - 1);
      const whitespaceLength = (charLength - 1);
      const width = padding + border + 9 * symbolLength - 4 * whitespaceLength;
      return `${width}px`;
    };
    return css`width: ${calcWidth()}`;
  }};
  
  .MuiInputBase-root .MuiInputBase-input {
    padding-left: 32px;
    padding-right: 32px;
    letter-spacing: 0;
  }
  
  .MuiInputBase-input {
    text-align: left;
  }
  
  .MuiInputBase-root .MuiOutlinedInput-notchedOutline {
    padding: 0;
  }
`;
