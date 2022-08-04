import * as React from 'react';
export declare type AutocompleteTextFieldProps = {
    className?: string;
    dropdownClassName?: string;
    fetcher?: (prefix: string) => Promise<any[]>;
    dropdownItemProps: {
        className?: string;
        formatKey?: (item: any) => string;
        renderItem: (item: any, index: number) => string | React.ReactNode;
    };
    input: {
        value: any;
        onChange: (item: any) => void;
        clearOnSelect?: boolean;
    };
    textFieldProps: {
        formatValue: (item: any) => string;
    };
};
export declare type AutocompleteTextFieldState = {
    inputValue: string;
    items: any[];
    isOpen: boolean;
};
export declare class AutocompleteTextField extends React.Component<AutocompleteTextFieldProps, AutocompleteTextFieldState> {
    state: {
        inputValue: string;
        items: any[];
        isOpen: boolean;
    };
    static defaultProps: {
        dropdownItemProps: {
            formatKey: (item: any) => any;
            renderItem: (item: any) => any;
        };
        textFieldProps: {
            formatValue: (item: any) => any;
        };
    };
    handleInputChange: (value: string) => void;
    handleItemClick: (e: React.SyntheticEvent<Element, Event>, index: number) => void;
    render(): JSX.Element;
}
export default AutocompleteTextField;
