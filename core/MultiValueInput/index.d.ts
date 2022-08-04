import * as React from 'react';
export declare type MultiValueInputProps = {
    children: (innerProps: {
        innerInput: {
            onChange: (value: any) => void;
            value: any;
        };
        handleAddItem: (item: any) => void;
    }) => React.ReactNode;
    className?: string;
    itemListClassName?: string;
    itemProps: {
        className?: string;
        formatKey?: (item: any, index?: number) => string;
        renderItem: (item: any, index?: number) => string;
    };
    input: {
        value: any[];
        onChange: (item: any) => void;
    };
};
export declare type MultiValueInputState = {
    innerInputValue: any;
    items: any[];
};
export declare class MultiValueInput extends React.Component<MultiValueInputProps, MultiValueInputState> {
    state: {
        innerInputValue: string;
        items: any[];
        isOpen: boolean;
    };
    handleInputChange: (value: any) => void;
    handleAddItem: (item: any) => void;
    handleDelete: (index: number) => void;
    render(): JSX.Element;
}
export default MultiValueInput;
