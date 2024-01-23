import ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import App from 'App';
import { ToastContainer } from 'react-toastify';
import 'styles.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <ToastContainer />
    </React.StrictMode>
  </Provider>
);
