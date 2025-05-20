import { Link } from 'react-router';
import { HomeCard } from '../components';

export const Home = () => {
  return (
    <div>
      {['Nine', 'Test1', 'Test2'].map((game) => (
        <Link
            key={game}
            to='/nine'
          >
          <HomeCard
            key={game} 
            image={`https://picsum.photos/200/300?random=${game}`}
            gameName={game}
          />
        </Link>
      ))}
    </div>
  );
};

