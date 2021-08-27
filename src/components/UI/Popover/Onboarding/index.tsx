import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Button,
} from '@material-ui/core';
import { Slide, SlideProps } from './Slide';
import { MobileStepper } from './styles';

export type TSlides = Array<SlideProps>;

interface Props {
  setIsOpen: (value: boolean) => void;
  slides: TSlides;
}
export function Onboarding({
  slides,
  setIsOpen,
}:Props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = slides.length;
  const handleNext = (callback?: () => void) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    callback?.();
  };

  const handleBack = (callback?: () => void) => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    callback?.();
  };
  const activeSlide = slides[activeStep];
  activeSlide.actions?.map((action) => {
    if (action.type === 'next') {
      action.callback = handleNext;
    }
    if (action.type === 'back') {
      action.callback = handleBack;
    }
    if (action.type === 'close') {
      action.callback = () => { setIsOpen(false); };
    }
    return action;
  });
  return (
    <>
      <Slide
        title={activeSlide.title}
        content={activeSlide.content}
        actions={activeSlide.actions}
      />
      { maxSteps > 1 && (
        <MobileStepper
          steps={maxSteps}
          variant="dots"
          position="static"
          activeStep={activeStep}
        />
      )}
    </>
  );
}