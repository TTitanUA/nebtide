import React from 'react';
import { Route, Routes } from 'react-router';

import { Typography } from '@/components/ui/typography';
import { AppLayout } from '@/layouts/app-layout';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route
          element={
            <div>
              {/*<h1 className='text-primary'>Home</h1>*/}
              {/*<h1 className='text-neutral-content'>Home</h1>*/}
              {/*<h1 className='text-primary'>Home</h1>*/}
              {/*<h1 className='text-primary'>Home</h1>*/}
              <Typography>Home</Typography>
            </div>
          }
          index
        />
      </Route>
    </Routes>
  );
}

export default App;
