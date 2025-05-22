import { Suspense } from 'react';
import { Box, useMediaQuery } from '@mui/material';

import type { AppLayoutProps } from './AppLayoutProps';

import { AppLayoutNotification } from './components';

export const AppLayout = ({ children }: AppLayoutProps) => {
  const isViewAllowed = useMediaQuery('(min-width: 44rem)');

  return (
    <Suspense 
      fallback={<Box sx={{ backgroundColor: 'transparent' }} />}>
      <Box
        sx={{
          display: 'flex',
          height: '100%',
          maxHeight: '100%',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <Box
          sx={{
            overflow: 'auto',
            width: '100%',
          }}
        >
          {isViewAllowed 
            ? (
              <>
                {children}
              </>
            )
            : (
              <AppLayoutNotification />
            )
          }
        </Box>
      </Box>
    </Suspense>
  );
};
