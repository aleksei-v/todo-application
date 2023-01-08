import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from "react-router-dom";
import { theme } from './theme/theme';
import Wrapper from 'components/Wrapper/Wrapper';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/todo-application">
      <ThemeProvider theme={theme}>
        <Wrapper>
          <App />
        </Wrapper>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
