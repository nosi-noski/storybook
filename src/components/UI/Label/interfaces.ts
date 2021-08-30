import { TypographyProps as MuiTypographyProps } from '@material-ui/core';
import { DefaultTheme, FlattenInterpolation, ThemedStyledProps } from 'styled-components';

type ColorLabelVariants = 'info'| 'success' | 'warning' | 'error' | 'default';

export interface LabelProps extends MuiTypographyProps {
  type?: ColorLabelVariants;
  children?: string | JSX.Element;
}

export type LabelColorMapType = Record<ColorLabelVariants,
  FlattenInterpolation<ThemedStyledProps<{}, DefaultTheme>>>;
