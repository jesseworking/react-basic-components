/// <reference types="react" />
import { FileWithPreview } from '../types/index.d';
export declare type FilePreviewerProps = {
    className?: string;
    files: FileWithPreview[];
    onDeleteFile?: (file: FileWithPreview, index: number) => void;
};
export declare const FilePreviewer: ({ className, files, onDeleteFile }: FilePreviewerProps) => JSX.Element;
declare const StyledFilePreviewer: import("styled-components").StyledComponent<({ className, files, onDeleteFile }: FilePreviewerProps) => JSX.Element, any, {}, never>;
export default StyledFilePreviewer;
