import React from 'react';
import Home from './pages/Home';

const appRoutes = [
  { path: '/', element: <Home /> },
];

export const routePaths = appRoutes.map((r) => r.path);

export default appRoutes;
