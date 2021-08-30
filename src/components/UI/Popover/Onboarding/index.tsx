import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Button,
} from '@material-ui/core';
import { Slide, TSlides } from './Slide';
import { Stepper } from './Stepper';

interface Props {
  slides: TSlides;
}
export function Onboarding({
  slides,
}:Props) {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = slides.length;
  const handleNext = (callback?: () => void) => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep === maxSteps - 1) {
        return prevActiveStep;
      }
      return prevActiveStep + 1;
    });
    callback?.();
  };

  const handleBack = (callback?: () => void) => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep === 0) {
        return prevActiveStep;
      }
      return prevActiveStep - 1;
    });
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
    return action;
  });
  return (
    <Slide
      key={activeSlide.title}
      title={activeSlide.title}
      content={activeSlide.content}
      actions={activeSlide.actions}
      stepper={
        maxSteps > 1 ? (
          <Stepper
            steps={slides}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        ) : undefined
      }
    />
  );
}
