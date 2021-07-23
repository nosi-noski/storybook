import React from 'react';
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';

import { theme } from '../src/mui/theme';
import { GlobalStyle } from '../src/styled/global';

const themes = [theme];
addDecorator(withThemesProvider(themes, ThemeProvider));

const withThemeProvider = (Story, context)=> {
	return (
		<MuiThemeProvider theme={theme}>
			<StylesProvider injectFirst>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Story {...context} />
				</ThemeProvider>
			</StylesProvider>
		</MuiThemeProvider>
	)
}
export const decorators = [withThemeProvider]