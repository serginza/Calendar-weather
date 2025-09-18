import React, { memo, type JSX } from 'react';

interface IconProps extends React.ObjectHTMLAttributes<HTMLElement> {
  path: string;
  alt?: string;
}

function IconProto({ path, alt = 'icon', ...props }: IconProps): JSX.Element {
  const src = `${import.meta.env.BASE_URL}${path}`;

  return <img src={src} aria-label={alt} {...props}></img>;
}

export const Icon = memo(IconProto);
