import styled from 'styled-components';

import { TextField as MuiTextField } from '../../components/UI/TextField';

export const TextField = styled(MuiTextField)`

  .MuiInputBase-input {
    padding: 7px 32px;
    letter-spacing: normal;
  }
  
  .MuiFormHelperText-contained {
  }
  .MuiInputBase-input {
    text-align: center;
  }
  .MuiInputBase-root .MuiOutlinedInput-notchedOutline {
    padding: 0;
  }
  
  
`;
