import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyle } from './components/GlobalStyle';
import contacts from 'contacts.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App initialContacts={contacts} />
  </React.StrictMode>
);
