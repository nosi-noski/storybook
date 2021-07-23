import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';

import { GlobalStyle } from 'styled/global';
import { theme } from 'mui/theme';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </StylesProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
