import * as React from 'react';
export declare type StepProps = {
    className?: string;
    label: string | React.ReactNode;
    key?: string;
    hasError?: boolean;
    completed?: boolean;
    disabled?: boolean;
    content?: string | React.ReactNode;
};
export declare type StepperProps = {
    activeStep: number;
    className?: string;
    orientation?: 'horizontal' | 'vertical';
    steps: StepProps[];
    onStepClick?: (step: StepProps, index: number) => void;
};
export declare const Stepper: ({ activeStep, className, orientation, steps, onStepClick }: StepperProps) => JSX.Element;
export default Stepper;
