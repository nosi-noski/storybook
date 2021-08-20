import styled, { css } from 'styled-components';
import { Badge as MuiBadge } from '@material-ui/core';

export const CounterColorVariants = {
  warning: css`
    ${({ theme: { custom: { lightTheme: { colors: { background, typographyAndIcons } } } } }) => css`
      .MuiBadge-colorWarning {
        color: ${typographyAndIcons.default.active};
        background: ${background.brand};
      }
    `};
  `,
  error: css`
    ${({ theme: { custom: { lightTheme: { colors: { background, typographyAndIcons } } } } }) => css`
      .MuiBadge-colorError {
        color: ${background.white};
        background: ${typographyAndIcons.default.error};
      }
    `};
  `,
};

interface Props {
  count?: number;
  color: keyof typeof CounterColorVariants;
}

export const Badge = styled(MuiBadge)<Props>`
.MuiBadge-badge {
  display: flex;
  align-items: center;
  text-align: center;
  min-width: 14px;
  min-height: 14px;
  height: 14px;
  line-height: 14px;
  font-size: 10px;
  letter-spacing: 0.4px;
  padding: ${({ count }) => {
    if (typeof (count) === 'undefined') {
      return 0;
    }
    if (Math.abs(count) > 9) {
      return '0 4px';
    }
    return 0;
  }};
}
  ${({ color }) => css`${CounterColorVariants[color]}`};
`;
