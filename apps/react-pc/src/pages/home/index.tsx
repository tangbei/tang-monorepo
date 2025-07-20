import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/header';

const Home: FC = () => {

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
};

export default Home;