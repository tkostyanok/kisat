import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import type { HomeCardProps } from './HomeCardProps';

export const HomeCard = ({
  image,
  gameName
}: HomeCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* max width ?? */}
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={image}
          alt={gameName}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {gameName}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  );
};