import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
import './utils/i18n';
import '@/styles/globals.css';
import router from './router';
import { Provider } from 'react-redux'
import store from './stores'
import { RouterProvider } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
