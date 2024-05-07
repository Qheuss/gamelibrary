import { FaPlaystation, FaXbox } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { BsNintendoSwitch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// TODO ajouter le titre du jeu sur les cartes

const Card = ({ game }) => {
  return (
    <li className="card">
      <Link to={`/game/${game.id}`} state={{ game: { game } }}>
        <img
          className="gameImage"
          src={game.background_image}
          alt={game.name}
        />
        <div className="infos">
          <h2>{game.name}</h2>
          <hr />
          <div>
            <h3>Ratings: {game.ratings_count}</h3>
            <h3 className="rating">Overall rating: {game.rating}/5</h3>
          </div>
          <ul>
            {game.parent_platforms.slice(0, 7).map(
              (platformObj) =>
                (platformObj.platform.id === 1 ||
                  platformObj.platform.id === 2 ||
                  platformObj.platform.id === 3 ||
                  platformObj.platform.id === 7) && (
                  <li key={crypto.randomUUID()}>
                    {platformObj.platform.id === 1 && <MdComputer />}
                    {platformObj.platform.id === 2 && <FaPlaystation />}
                    {platformObj.platform.id === 3 && <FaXbox />}
                    {platformObj.platform.id === 7 && <BsNintendoSwitch />}
                  </li>
                )
            )}
          </ul>
        </div>
      </Link>
    </li>
  );
};

Card.propTypes = {
  game: PropTypes.object.isRequired,
};

export default Card;
