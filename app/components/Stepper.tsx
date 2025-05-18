import React from 'react';
import { Stepper as MuiStepper, Step, StepLabel } from '@mui/material';

const steps = ['Жанр', 'Обложка', 'AI-вопросы', 'Главы', 'Превью'];

export default function Stepper({ activeStep = 0 }: { activeStep?: number }) {
  return (
    <MuiStepper activeStep={activeStep} alternativeLabel className="mb-8">
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </MuiStepper>
  );
}
