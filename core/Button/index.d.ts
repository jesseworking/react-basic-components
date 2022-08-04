import * as React from 'react';
export declare type ButtonProps = {
    className?: string;
    children?: React.ReactNode | string;
    onClick?: (e: React.MouseEvent) => void;
    native?: boolean;
    type?: string;
};
export declare const Button: ({ children, className, onClick, native, type }: ButtonProps) => JSX.Element;
export default Button;
