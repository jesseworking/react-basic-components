import * as React from 'react';
export declare type Props = {
    children: React.ReactNode;
    dropdown: JSX.Element;
    isOpen: boolean;
    onClickOutside: () => void;
};
export declare class DropdownWrapper extends React.Component<Props, {}> {
    ref?: HTMLElement | null;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleClickOutside: (e: Event) => void;
    setRef: (node: HTMLElement) => void;
    render(): JSX.Element;
}
export default DropdownWrapper;
