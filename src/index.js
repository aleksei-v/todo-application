import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from "react-router-dom";
import { theme } from './theme/theme';
import { Provider } from 'react-redux';
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/todo-application">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
