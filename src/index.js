import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ItemContextProvider from './contexts/ItemContext';
import {SocketProvider} from './contexts/SocketProvider';


ReactDOM.render(
  <SocketProvider>
    <ItemContextProvider>
    <App />
  </ItemContextProvider>

  </SocketProvider>,
  document.getElementById('root')
);
