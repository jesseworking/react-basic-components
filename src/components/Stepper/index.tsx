import * as React from 'react';
import cx from 'classnames';
import MuiStepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

import { Step } from './styles';

export type StepProps = {
  className?: string;
  label: string | React.ReactNode;
  key?: string;
  hasError?: boolean;
  completed?: boolean;
  disabled?: boolean;
  content?: string | React.ReactNode;
};

export type StepperProps = {
  activeStep: number;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  steps: StepProps[];
  onStepClick?: (step: StepProps, index: number) => void;
};

export const Stepper = ({
  activeStep,
  className,
  orientation,
  steps,
  onStepClick
}: StepperProps) => {
  // If the `completed` key exists on any step, Stepper is designated to be 'non-linear', meaning that every step prior to the active step is considered 'completed'
  const isNonLinear = steps.reduce(
    (stepsWithCompletedKey, step) =>
      step.completed !== undefined || stepsWithCompletedKey,
    false
  );

  return (
    <MuiStepper
      activeStep={activeStep}
      className={className}
      orientation={orientation}
      nonLinear
    >
      {steps.map((step, i) => {
        const {
          completed,
          content,
          disabled,
          hasError,
          key,
          label,
          className
        } = step;

        const isCompleted = isNonLinear ? completed : i < activeStep;
        const clickable = onStepClick && !disabled;

        return (
          <Step
            key={key || `step_${label}`}
            onClick={clickable ? () => onStepClick(step, i) : undefined}
            className={cx(className, { clickable })}
            classes={{}}
            innerRef={null}
            style={{}}
          >
            <StepLabel
              completed={isCompleted}
              disabled={disabled}
              error={hasError}
            >
              {label}
            </StepLabel>
            {content && <StepContent>{content}</StepContent>}
          </Step>
        );
      })}
    </MuiStepper>
  );
};

export default Stepper;
