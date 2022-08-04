import * as React from 'react';
import cx from 'classnames';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';

import { FileWithPreview } from '../types/index.d';
import { DropzoneProps } from '../../../node_modules/react-dropzone';

const c = require('./content.json');

export type Props = {
  activeClassName?: string;
  children?: string;
  className?: string;
  onUpload?: (uploaded: FileWithPreview[]) => any;
  onReject?: (rejected: File[]) => any;
  dropzoneOptions?: DropzoneProps;
};

// TODO: Styling

class FileDropzone extends React.Component<Props, {}> {
  onDrop = (uploaded: File[] = [], rejected: File[] = []) => {
    const { onUpload, onReject } = this.props;

    const uploadedWithPreviews = uploaded.map(
      file =>
        ({ ...file, preview: URL.createObjectURL(file) } as FileWithPreview)
    );

    if (onUpload) onUpload(uploadedWithPreviews);
    if (onReject) onReject(rejected);
  };

  render() {
    const {
      activeClassName,
      children,
      className,
      dropzoneOptions
    } = this.props;

    return (
      <Dropzone onDrop={this.onDrop} {...dropzoneOptions}>
        {({ getRootProps, getInputProps, isDragActive }) => (
          <div
            {...getRootProps()}
            className={cx('dropzone', className, {
              [cx(activeClassName)]: isDragActive
            })}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop files here...</p>
            ) : (
              <p>{children || c.instruction}</p>
            )}
          </div>
        )}
      </Dropzone>
    );
  }
}

const StyledFileDropzone = styled(FileDropzone)`
  display: flex;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  text-align: center;
  border: 3px dotted lightgray;
  cursor: pointer;
`;

export default StyledFileDropzone;
