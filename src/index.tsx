import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './main';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
