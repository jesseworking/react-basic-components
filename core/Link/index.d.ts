import * as React from 'react';
export declare type LinkProps = {
    to?: string;
    children?: React.ReactNode;
    className: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: (event: React.MouseEvent) => void;
    onMouseOver?: (event: React.MouseEvent) => void;
    onMouseOut?: (event: React.MouseEvent) => void;
    target?: string;
    title?: string;
};
declare const Link: ({ to, children, className, disabled, onClick, onMouseOver, onMouseOut, target, title }: LinkProps) => JSX.Element;
export default Link;
