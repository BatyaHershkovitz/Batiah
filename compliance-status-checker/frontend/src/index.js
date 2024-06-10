import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import { myStore } from './store/app/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={myStore}>
    <App />
  </Provider>
);