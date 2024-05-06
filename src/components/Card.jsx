/* eslint-disable react/prop-types */
import { FaPlaystation, FaXbox } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { BsNintendoSwitch } from 'react-icons/bs';

// TODO quand je clique sur une carte que ca m'envoie dans un autre url avec le nom du jeu et ses infos dans la page

const Card = ({ game }) => {
  return (
    <li className="card">
      <img className="gameImage" src={game.background_image} alt={game.name} />
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
    </li>
  );
};

export default Card;
