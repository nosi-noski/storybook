import React from 'react';
import { Tooltip, TooltipTypeVariants } from './styles';
import { Helper } from './Helper';
import { Onboarding, TSlides } from './Onboarding';

interface Props {
  type?: keyof typeof TooltipTypeVariants;
  open: boolean;
  setIsOpen: () => void;
  content: string | TSlides;
  arrow?: boolean;
  children?: React.ReactElement;
}

export function Popover({
  type = 'helper',
  open,
  setIsOpen,
  content,
  arrow,
  children,
}:Props) {
  const contentType = type as string === 'onboarding'
    ? <Onboarding slides={content as TSlides} setIsOpen={setIsOpen} />
    : <Helper title={content as string} />;
  return (
    <Tooltip
      title={contentType}
      type={type}
      open={open}
      arrow={arrow}
    >{children}
    </Tooltip>
  );
}
