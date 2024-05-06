/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

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

export default SearchBar;
