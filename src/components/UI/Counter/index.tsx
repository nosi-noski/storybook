import React, { useCallback } from 'react';
import { Tooltip } from '../Tooltip';
import { Badge } from './styles';

export interface BadgeProps {
  count?: number;
  color?: 'error' | 'warning';
  isError?: boolean;
  children: React.ReactNode;
}
export const Counter = ({
  count,
  color = 'error',
  isError = false,
  children,
}:BadgeProps) => {
  const formatNumber = useCallback((value: number | undefined, isShowError: boolean) => {
    console.log('isError', isShowError);
    if (isShowError) {
      console.log('isError', isShowError);
      return '!';
    }
    const abs = Math.abs(value);
    if (abs && abs > 999) {
      const formattedValue = `${Math.sign(value) * parseFloat((abs / 1000).toFixed(1))}K`;
      return formattedValue.replace('.', ',');
    }
    console.log('value', value);
    return value;
  }, []);
  return (
    <Tooltip
      title="Не удалось получить уведомления"
      placement="bottom"
      disableHoverListener={!isError}
    >
      <Badge
        max={999}
        badgeContent={formatNumber(count, isError)}
        color={color}
        count={count}
        showZero
      >
        {children}
      </Badge>
    </Tooltip>
  );
};
