import { Outlet } from 'react-router-dom';
import { RootLayoutHeader } from './components';

const RootLayout = () => {
  return (
    <>
      <RootLayoutHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
