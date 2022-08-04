/// <reference types="react" />
import { FileWithPreview } from '../types';
export declare type FileUploaderProps = {
    children?: string;
    className: string;
    dropzoneClassName: string;
    input: {
        value: FileWithPreview[];
        onChange: (files: FileWithPreview[]) => void;
    };
    previewClassName: string;
};
export declare const FileUploader: ({ className, children, dropzoneClassName, input: { value, onChange }, previewClassName }: FileUploaderProps) => JSX.Element;
export default FileUploader;
