import PropTypes from 'prop-types';

const Genres = ({ data, setFilteredData }) => {
  const handleFilterClick = (genre) => {
    const filteredData = data.filter((game) =>
      game.genres.some((g) => g.name.toLowerCase() === genre.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <ul className="genres">
      <li>
        <button
          onClick={() => {
            setFilteredData(data);
          }}
        >
          All
        </button>
      </li>
      <li>
        <button onClick={() => handleFilterClick('action')}>Action</button>
      </li>
      <li>
        <button onClick={() => handleFilterClick('adventure')}>
          Adventure
        </button>
      </li>
      <li>
        <button onClick={() => handleFilterClick('strategy')}>Strategy</button>
      </li>
      <li>
        <button onClick={() => handleFilterClick('shooter')}>Shooter</button>
      </li>
      <li>
        <button
          className={(button) => (button.onclick ? 'button-active' : '')}
          onClick={() => handleFilterClick('puzzle')}
        >
          Puzzle
        </button>
      </li>
      <li>
        <button onClick={() => handleFilterClick('racing')}>Racing</button>
      </li>
      <li>
        <button onClick={() => handleFilterClick('sports')}>Sports</button>
      </li>
      <li>
        <button onClick={() => handleFilterClick('rpg')}>RPG</button>
      </li>
    </ul>
  );
};

Genres.propTypes = {
  data: PropTypes.array.isRequired,
  setFilteredData: PropTypes.func.isRequired,
};

export default Genres;
