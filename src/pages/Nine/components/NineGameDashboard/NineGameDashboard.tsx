import { useParams } from 'react-router';

export const NineGameDashboard = () => {
  const params = useParams();
  const { gameId } = params;
  const text = gameId ? `Game ID: ${gameId}` : 'No Game ID provided';
  return (
    <div>
      <h3>Nine Game Dashboard page</h3>
      <h4>{text}</h4>
    </div>
  );
};

