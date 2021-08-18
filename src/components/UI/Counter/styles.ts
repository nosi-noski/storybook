import styled, { css } from 'styled-components';

export const CounterColorVariants = {
  yellow: css`
    ${({ theme: { custom: { lightTheme: { colors: { background, typographyAndIcons } } } } }) => css`
      color: ${typographyAndIcons.default.active};
      background: ${background.brand};
    `};
  `,
  red: css`
    ${({ theme: { custom: { lightTheme: { colors: { background, typographyAndIcons } } } } }) => css`
      color: ${background.white};
      background: ${typographyAndIcons.default.error};
    `};
   
  `,
};

interface Props {
  count?: number;
  color: keyof typeof CounterColorVariants;
}
export const Container = styled.div<Props>`
  min-width: 14px;
  width: fit-content;
  min-height: 14px;
  border-radius: 8px;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0.4px;
  text-align: center;
  padding: ${({ count }) => {
    if (typeof (count) === 'undefined') {
      return 0;
    }
    if (Math.abs(count) > 9) {
      return '0 4px';
    }
    return 0;
  }};
  ${({ color }) => css`${CounterColorVariants[color]};`};
`;
