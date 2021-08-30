import { TooltipProps as MuiTooltipProps } from '@material-ui/core';
import { DefaultTheme, FlattenInterpolation, ThemedStyledProps } from 'styled-components';
import { TSlides } from './Onboarding'
import { TooltipTypeVariants } from './styles'

export interface TooltipProps extends MuiTooltipProps {
  type?: TooltipTypeVariants;
}

export interface PopoverProps extends TooltipProps{
  open: boolean;
  content: string | TSlides;
  arrow?: boolean;
}

type TooltipTypeVariants = 'helper' | 'onboarding';

export type TooltipStylesMapType = Record<TooltipTypeVariants,
  FlattenInterpolation<ThemedStyledProps<{}, DefaultTheme>>>;