import { Box } from '@mui/material';

export const AppLayoutNotification = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Box
        sx={{
          fontSize: '2rem',
          color: '#000',
        }}
      >
        Screen size is too small. Minimum screen size is 44rem (704px).
      </Box>
    </Box>

  );
};
