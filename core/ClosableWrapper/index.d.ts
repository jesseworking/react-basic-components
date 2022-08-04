import * as React from 'react';
export declare type ClosableWrapperProps = {
    children?: React.ReactNode | React.ReactNode[];
    className?: string;
    onClose?: () => void;
};
export declare const ClosableWrapper: ({ className, children, onClose }: ClosableWrapperProps) => JSX.Element;
export default ClosableWrapper;
