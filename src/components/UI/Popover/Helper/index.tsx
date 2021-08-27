import React from 'react';
import { Title } from './styled';

interface Props {
  title: string;
}

export function Helper({ title }:Props) {
  return (
    <Title>
      {title}
    </Title>
  );
}
