import { Link, useLocation } from 'react-router';

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography
 } from '@mui/material';
import { Home, Interests } from '@mui/icons-material';

import type { IMainMenuListItem } from 'types';

export const MainMenu = () => {
  const location = useLocation();
  const isNineGame = location.pathname.startsWith('/nine/') && location.pathname.length > 6;

  const mainMenuList: IMainMenuListItem[] = [
    {
      icon: <Home />,
      isVisible: true,
      link: '/',
      title: 'home',
    },
    {
      icon: <Interests />,
      isVisible: isNineGame,
      link: '/nine',
      title: 'nine',
    },
  ];

  return (
      <AppBar 
        position='static'
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            padding: '0 1rem',
            maxWidth: '75rem',
            margin: '0 auto',
            width: '100%',
          }}
        >
          {mainMenuList.map((menuItem: IMainMenuListItem) => (
            menuItem.isVisible && (
              <Link
                key={menuItem.title}
                style={{
                  alignItems: 'center',
                  color: 'white',
                  display: 'flex',
                  marginRight: '2rem',
                  textDecoration: 'none',
                }}
                to={menuItem.link}
              >
                <IconButton
                  edge='start'
                  sx={{
                    ariaLabel: `menu-${menuItem.title}`,
                    color: 'white',
                  }}
                >
                  {menuItem.icon}
                </IconButton>
                <Typography 
                  component='div'
                  sx={{ 
                    flexGrow: 1,
                    textTransform: 'capitalize',
                  }}
                  variant='h6'
                >
                  {menuItem.title}
                </Typography>
              </Link>
            )
          ))}
        </Toolbar>
      </AppBar>
  );
};
