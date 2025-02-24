import React from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { AppLayout } from '@/layouts/app-layout';
import { Home } from '@/pages/home';
import { Settings } from '@/pages/settings';
import { RoutesEnum } from '@/routes/routes';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route element={<Home />} index />
        <Route element={<Settings />} path={RoutesEnum.SETTINGS} />
      </Route>

      <Route element={<Navigate replace to={RoutesEnum.HOME} />} path='*' />
    </Routes>
  );
}

export default App;
