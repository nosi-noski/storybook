import { TooltipProps as MuiTooltipProps } from '@material-ui/core';
import { TooltipTypeVariants } from './styles'
import { TSlides } from './Onboarding'
import { DefaultTheme, FlattenInterpolation, ThemedCssFunction, ThemedStyledProps } from 'styled-components';

export interface TooltipProps extends MuiTooltipProps {
  type?: TooltipTypeVariants;
}

export interface PopoverProps extends TooltipProps{
  open: boolean;
  setIsOpen: () => void;
  content: string | TSlides;
  arrow?: boolean;
}

type TooltipTypeVariants = 'helper' | 'onboarding';

export type TooltipStylesMapType = Record<TooltipTypeVariants, FlattenInterpolation<ThemedStyledProps<{}, DefaultTheme>>>;