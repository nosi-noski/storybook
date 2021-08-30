import React from 'react';
import { TooltipProps } from '@material-ui/core';
import { PopoverProps } from './interfaces';
import { Tooltip } from './styles';
import { Helper } from './Helper';
import { Onboarding, TSlides } from './Onboarding';

export function Popover({
  type = 'helper',
  open,
  content,
  arrow,
  children,
  ...props
}:PopoverProps) {
  const contentType = type as string === 'onboarding'
    ? <Onboarding slides={content as TSlides} />
    : <Helper title={content as string} />;
  return (
    <Tooltip
      {...props}
      title={contentType}
      type={type}
      open={open}
      arrow={arrow}
    >{children}
    </Tooltip>
  );
}
