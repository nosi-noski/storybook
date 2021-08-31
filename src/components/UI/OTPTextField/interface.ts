import { TextFieldProps as DefaultTextFieldProps } from '../TextField';

export interface TextFieldProps extends DefaultTextFieldProps {
  length?: number;
}

export interface OTPTextFieldProps extends TextFieldProps{
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}