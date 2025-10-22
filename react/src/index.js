import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import appRoutes, { routePaths } from './routes';

// Sync routes once on application start
try {
  if (typeof window !== 'undefined') {
    const paths = Array.isArray(routePaths) && routePaths.length > 0 ? routePaths : appRoutes.map((r) => r.path);
    if (typeof window.handleRoutes === 'function') {
      window.handleRoutes(paths);
    } else {
      window.handleRoutes = function () {};
      window.handleRoutes(paths);
    }
  }
} catch (e) {
  console.warn('handleRoutes invocation error', e);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
