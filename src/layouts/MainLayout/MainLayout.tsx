import { Outlet } from 'react-router';

import { MainMenu } from './components';

export const MainLayout = () => {
  return (
    <>
      <MainMenu />
      <main
        style={{
          height: '100%', // ??
          margin: '0 auto',
          maxWidth: '75rem',
          padding: '1.5rem',
        }}
      >
        <Outlet />
      </main>
    </>
  );
};
