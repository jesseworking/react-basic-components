/// <reference types="react" />
export declare type ImageProps = {
    alt?: string;
    className?: string;
    src: string | {
        viewBox: string;
        id: string;
    };
    size?: {
        width: string | number;
        height: string | number;
    };
    onClick?: () => void;
};
export declare const Image: ({ src, alt, size, className, onClick }: ImageProps) => JSX.Element;
export default Image;
