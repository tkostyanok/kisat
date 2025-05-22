import { Link } from 'react-router';
import { Box } from '@mui/material';

import type { IGamesListItem } from 'types';

import { HomeCard } from '../components';

import NineImg from 'assets/nine.jpg';

export const Home = () => {
  const gamesList: IGamesListItem[] = [
    {
      gameName: 'nine',
      image: NineImg,
      link: '/nine',
    },
  ];

  return (
    <Box
      sx={{
        display: 'grid',
        gap: 2,
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(350px, 100%), 1fr))',
        paddingRight: '2rem',
        width: '100%',
      }}
    >
      {gamesList.map(({ gameName, image, link } : IGamesListItem ) => (
        <Link
            key={`game-${gameName}`}
            to={link}
          >
          <HomeCard
            image={`${image}`}
            gameName={gameName}
          />
        </Link>
      ))}
    </Box>
  );
};

