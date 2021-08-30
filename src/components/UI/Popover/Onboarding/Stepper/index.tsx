import React, { useState } from 'react';
import { Theme, createStyles } from '@material-ui/core/styles';
import { Stepper as MuiStepper, StepButton } from '@material-ui/core';
import { TSlides } from '../Slide';
import { Step } from './styles';

interface Props {
  steps: TSlides;
  activeStep: number;
  setActiveStep:(value: number) => void;
}

export function Stepper({
  steps,
  activeStep,
  setActiveStep,
}:Props) {
  const isLastStep = () => activeStep === steps.length - 1;
  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };
  return (
    <MuiStepper nonLinear activeStep={activeStep}>
      {steps.map((step, index) => (
        <Step
          key={step.title}
          onClick={handleStep(index)}
          active={index === activeStep}
        />
      ))}
    </MuiStepper>
  );
}
