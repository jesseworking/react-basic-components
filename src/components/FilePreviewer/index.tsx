import * as React from 'react';
import styled from 'styled-components';

import { ClosableWrapper } from '../ClosableWrapper';
import colors from '../../styles/colors';
import { FileWithPreview } from '../types/index.d';

// TODO: Styling
export type FilePreviewerProps = {
  className?: string;
  files: FileWithPreview[];
  onDeleteFile?: (file: FileWithPreview, index: number) => void;
};

export const FilePreviewer = ({
  className,
  files,
  onDeleteFile = () => {}
}: FilePreviewerProps) => (
  <div className={className}>
    {files.map((file, i) => (
      <div key={file.preview}>
        <ClosableWrapper onClose={() => onDeleteFile(file, i)}>
          <p>{file.name}</p>
          <img height={60} src={file.preview} />
        </ClosableWrapper>
      </div>
    ))}
  </div>
);

const StyledFilePreviewer = styled(FilePreviewer)`
  display: ${({ files }) => (files.length > 0 ? 'flex' : 'none')};
  flex-direction: row;
  background-color: ${colors.alto};
  padding: 10px;
`;

export default StyledFilePreviewer;
