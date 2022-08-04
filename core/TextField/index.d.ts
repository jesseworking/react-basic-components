/// <reference types="react" />
export declare type TextFieldProps = {
    autoFocus?: boolean;
    className?: string;
    disableUnderline?: boolean;
    required?: boolean;
    input: {
        value: string;
        onChange: (value: string) => void;
    };
    placeholder?: string;
    onEnter?: () => void;
    type?: string;
};
export declare const TextField: ({ autoFocus, className, required, input: { onChange, value }, placeholder, type, onEnter }: TextFieldProps) => JSX.Element;
export default TextField;
