import React from 'react';

import { MatIcon } from './styles';

interface Props {
  iconName?: string;
}

Icon.defaultProps = {
  iconName: 'check',
};

export function Icon({ iconName }:Props) {
  return (
    <MatIcon role="img">{iconName}</MatIcon>
  );
}
