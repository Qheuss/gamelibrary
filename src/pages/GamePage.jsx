import Footer from '../components/Footer';
import { useParams, useLocation } from 'react-router-dom';
import GameDetails from '../components/GameDetails';

const GamePage = () => {
  const location = useLocation();
  let { gameId } = useParams();
  const { game } = location.state;

  return (
    <>
      <div className="gameGrid">
        <GameDetails gameId={gameId} game={game} />
      </div>
      <Footer />
    </>
  );
};

export default GamePage;
