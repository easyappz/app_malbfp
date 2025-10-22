import React from 'react';
import Home from './pages/Home';
import Aura from './pages/Aura';

const appRoutes = [
  { path: '/', element: <Home /> },
  { path: '/aura', element: <Aura /> },
];

export const routePaths = appRoutes.map((r) => r.path);

export default appRoutes;
