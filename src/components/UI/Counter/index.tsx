import React, { useCallback } from 'react';
import { Tooltip } from '../Tooltip';
import { Container } from './styles';

interface Props {
  count?: number;
  color?: 'red' | 'yellow';
}
export const Counter = ({ count, color }:Props) => {
  const formatNumber = useCallback((value: number | undefined) => {
    if (typeof (value) === 'undefined') {
      return '!';
    }
    const abs = Math.abs(value);
    if (abs && abs > 999) {
      const formattedValue = `${Math.sign(value) * parseFloat((abs / 1000).toFixed(1))}K`;
      return formattedValue.replace('.', ',');
    }
    return value;
  }, []);
  return (
    <Tooltip
      title="Не удалось получить уведомления"
      placement="bottom"
      disableHoverListener={(typeof (count) !== 'undefined')}
    >
      <Container
        color={color || 'red'}
        count={count}
      >
        {formatNumber(count)}
      </Container>
    </Tooltip>
  );
};
