import * as React from 'react';

import { Root, FileDropzone } from './styles';
import FilePreviewer from '../FilePreviewer';
import { FileWithPreview } from '../types';

export type FileUploaderProps = {
  children?: string;
  className: string;
  dropzoneClassName: string;
  input: {
    value: FileWithPreview[];
    onChange: (files: FileWithPreview[]) => void;
  };
  previewClassName: string;
};

export const FileUploader = ({
  className,
  children,
  dropzoneClassName,
  input: { value, onChange } = { value: [], onChange: () => {} },
  previewClassName
}: FileUploaderProps) => (
  <Root className={className}>
    <FileDropzone className={dropzoneClassName} onUpload={onChange}>
      {children}
    </FileDropzone>
    <FilePreviewer
      className={previewClassName}
      files={value}
      onDeleteFile={(file, index) => {
        const files = value.slice(0);
        files.splice(index, 1);
        onChange(files);
      }}
    />
  </Root>
);

export default FileUploader;
