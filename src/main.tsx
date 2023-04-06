import './reset.css';

import { GlobalStyle, theme } from './global-styles';

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={Routes} />
      <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>,
)
