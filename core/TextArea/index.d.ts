/// <reference types="react" />
export declare type TextAreaProps = {
    className?: string;
    disableUnderline?: boolean;
    input: {
        value: string;
        onChange: (value: string) => void;
    };
    rows: number;
    cols: number;
};
export declare const TextArea: ({ className, cols, input: { onChange, value }, rows }: TextAreaProps) => JSX.Element;
export default TextArea;
