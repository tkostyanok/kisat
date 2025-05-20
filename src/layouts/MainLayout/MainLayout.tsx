import { Outlet, useLocation, useParams } from 'react-router';
import { Box } from '@mui/material';

import { MainMenu } from './components';

export const MainLayout = () => {
    const params = useParams();
  console.log( 'MAin layout params:', params);
  const location = useLocation();
  console.log('Main layout location:', location);
  return (
    <Box>
      <MainMenu />
      <main>
        <Outlet />
      </main>
    </Box>
  );
};
