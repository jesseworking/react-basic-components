import * as React from 'react';
import { FileWithPreview } from '../types/index.d';
import { DropzoneProps } from '../../../node_modules/react-dropzone';
export declare type Props = {
    activeClassName?: string;
    children?: string;
    className?: string;
    onUpload?: (uploaded: FileWithPreview[]) => any;
    onReject?: (rejected: File[]) => any;
    dropzoneOptions?: DropzoneProps;
};
declare class FileDropzone extends React.Component<Props, {}> {
    onDrop: (uploaded?: File[], rejected?: File[]) => void;
    render(): JSX.Element;
}
declare const StyledFileDropzone: import("styled-components").StyledComponent<typeof FileDropzone, any, {}, never>;
export default StyledFileDropzone;
