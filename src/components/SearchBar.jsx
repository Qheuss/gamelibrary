import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ data, setFilteredData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredGames = data.filter((game) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredGames);
  }, [searchTerm, data, setFilteredData]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <input
        type="search"
        placeholder="&#128269; Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </>
  );
};

SearchBar.propTypes = {
  data: PropTypes.array.isRequired,
  setFilteredData: PropTypes.func.isRequired,
};

export default SearchBar;
