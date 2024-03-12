import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Layout from '@layout/index';
import { store } from '@store/index';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>,
);
