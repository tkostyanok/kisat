import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';

import { YELLOW_500 } from 'src/constants';

import type { HomeCardProps } from './HomeCardProps';


export const HomeCard = ({
  image,
  gameName
}: HomeCardProps) => {
  return (
    <Card
      sx={{
        backgroundColor: 'black',
        borderRadius: '0.5rem',
      }}
    >
      <CardActionArea>
        <CardMedia
          alt={gameName}
          component='img'
          height='350px'
          image={image}
        />
        <CardContent>
          <Typography 
              component='div'
              gutterBottom
              sx={{
                color: YELLOW_500,
                fontWeight: 'bold',
                textAlign: 'center',
                textTransform: 'capitalize'
              }} 
              variant='h5'
            >
            {gameName}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  );
};