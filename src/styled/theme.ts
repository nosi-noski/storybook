import { Theme } from '@material-ui/core';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {} // eslint-disable-line
}
