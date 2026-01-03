import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      {/*<img className={'w-full'} src={'https://resources.taoxiplan.com/raily/whole.png'} />*/}
      <App />
    </React.StrictMode>,
  );
}
