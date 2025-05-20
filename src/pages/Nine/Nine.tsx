import { Link, Outlet } from 'react-router';
import { NineGameCard } from './components';

export const Nine = () => {
  return (
    <div>
      <h3>Nine Page</h3>
      {['game_1', 'game_2', 'game_3'].map((gameId) => (
        <Link
          key={gameId}
          to={`/nine/${gameId}`}
        >
          <NineGameCard 
            key={gameId}
            image={`https://picsum.photos/200/300?random=${gameId}`}
            gameName={gameId}
          />
        </Link>

      ))}
      <Outlet />
    </div>
  );
};

