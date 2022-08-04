import * as React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Image from '../Image';

const closeIcon = require('./close-icon.svg').default;

const CloseButton = styled(Button)`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
`;

const RelativeWrapper = styled.div`
  position: relative;
`;

export type ClosableWrapperProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  onClose?: () => void;
};

export const ClosableWrapper = ({
  className,
  children,
  onClose
}: ClosableWrapperProps) => (
  <RelativeWrapper>
    <CloseButton onClick={onClose}>
      <Image src={closeIcon} size={{ height: 17, width: 18 }} />
    </CloseButton>
    {children}
  </RelativeWrapper>
);

export default ClosableWrapper;
