/// <reference types="react" />
export declare type ChipProps = {
    children: string;
    className: string;
    onDelete: () => void;
};
export declare const Chip: ({ children, className, onDelete }: ChipProps) => JSX.Element;
export default Chip;
