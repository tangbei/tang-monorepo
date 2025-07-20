import React, { Suspense } from 'react';
import { Spin } from 'antd';
import Routes from '@/routes';
import AuthRouter from '@/routes/authRoute';
import '@tang/styles/index_pc.scss';

const App = () => {
  return (
    <AuthRouter>
      <Suspense fallback={<Spin />}>
        <Routes />
      </Suspense>
    </AuthRouter>
  );
};

export default App;