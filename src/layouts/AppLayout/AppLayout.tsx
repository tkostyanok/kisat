import { Suspense } from 'react';
import { Box } from '@mui/material';

import type { AppLayoutProps } from './AppLayoutProps';

export const AppLayout = ({ children }: AppLayoutProps) => {
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
          {children}
          
        </Box>
      </Box>
    </Suspense>
  );
};
