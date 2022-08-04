import * as React from 'react';
export declare type SelectProps = {
    children: React.ReactNode;
    className?: string;
    input: {
        onChange: (value: string | number) => void;
        value: string | number;
    };
    onClose?: () => void;
    onOpen?: () => void;
    renderValue?: () => React.ReactNode;
    ref?: ((instance: any) => void) | React.RefObject<any> | null;
    selectClassName: string;
};
declare const Select: ({ children, className, input: { onChange, value }, onClose, onOpen, ref, renderValue, selectClassName }: SelectProps) => JSX.Element;
export default Select;
