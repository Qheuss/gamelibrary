import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';
import SearchBar from './SearchBar';
import Aside from '../components/Aside';

// TODO add infinite scroll

export default function Games() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games?key=${
          import.meta.env.VITE_API_KEY
        }&page_size=40&page=${page}`
      )
      .then((res) => setData(res.data.results));
  }, [page]);

  return (
    <>
      <Aside data={data} setFilteredData={setFilteredData} />
      <div className="games">
        <SearchBar data={data} setFilteredData={setFilteredData} />
        <ul>
          {filteredData.map((game) => (
            <Card key={game.name} game={game} />
          ))}
        </ul>
      </div>
    </>
  );
}
