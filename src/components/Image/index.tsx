import * as React from 'react';

import { Img, Svg } from './styles';

export type ImageProps = {
  alt?: string;
  className?: string;
  src: string | { viewBox: string; id: string };
  size?: {
    width: string | number;
    height: string | number;
  };
  onClick?: () => void;
};

export const Image = ({ src, alt, size, className, onClick }: ImageProps) =>
  typeof src !== 'string' ? (
    <Svg
      className={className}
      height={size && size.height}
      onClick={onClick}
      viewBox={src.viewBox}
      width={size && size.width}
    >
      <use xlinkHref={`#${src.id}`} />
    </Svg>
  ) : (
    <Img
      alt={alt}
      className={className}
      onClick={onClick}
      src={src}
      style={size}
    />
  );

export default Image;
