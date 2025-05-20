import { Link, useLocation, useParams } from 'react-router';

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography
 } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export const MainMenu = () => {
    const params = useParams();
  console.log( 'MainMenu layout params:', params);
  const location = useLocation();
  console.log('MainMenu location:', location);
  return (
      <AppBar position='static'>
        <Toolbar>
          <Link
            style={{
              textDecoration: 'none',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
            }}
            to='/'
          >
            <IconButton
              edge='start'
              sx={{
                ariaLabel: 'menu-home',
                color: 'white',
              }}
            >
              <HomeIcon />
            </IconButton>
            <Typography 
              component='div'
              sx={{ flexGrow: 1 }}
              variant='h6'
            >
              Home
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
  );
};
