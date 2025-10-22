import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import appRoutes from './routes';
import './App.css';
import makeEasyTag from './utils/easytag';

const et = makeEasyTag('src/App.js');

function App() {
  return (
    <div className="App" {...et()}>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            {appRoutes.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
