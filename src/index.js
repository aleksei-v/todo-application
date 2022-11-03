import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from "react-router-dom";
import { theme } from './theme';
import { Provider } from 'react-redux';
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/todo-application">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
);
