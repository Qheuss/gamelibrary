import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const GameDetails = ({ gameId, game }) => {
  const [data, setData] = useState([]);
  const ratings = data.ratings || [];
  const gameProp = game.game;

  // TODO add youtube trailers

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games/${gameId}?key=${
          import.meta.env.VITE_API_KEY
        }&page_size=40`
      )
      .then((res) => setData(res.data));
  }, [gameId]);

  return (
    <div className="gameDetails">
      <NavLink to={`/`}>
        <img className="logo" src="/assets/images/logo.svg" alt="logo" />
      </NavLink>
      <section className="banner">
        <picture className="banner__picture">
          <img
            className="bannerImage"
            src={data.background_image}
            alt={data.name}
          />
        </picture>
        <div className="banner__title">
          <h1>{data.name}</h1>
          <hr />
          <div className="ratings">
            <ul className="ratings__ratings">
              <li>
                <h3>{data.rating * 2}/10</h3>
              </li>
              <li>
                <div className="progress">
                  <div
                    style={{
                      background: '#84dccf',
                      width: `${((data.rating * 2) / 10) * 100}%`,
                      height: '100%',
                    }}
                  ></div>
                </div>
              </li>
              <li>
                <p>Based on {gameProp.ratings_count} ratings</p>
              </li>
            </ul>
            <ul className="ratings__notes">
              {ratings.map((rating, index) => (
                <li key={index}>
                  <span>
                    {rating.title.charAt(0).toUpperCase() +
                      rating.title.slice(1)}
                    :&nbsp;
                  </span>
                  <span>
                    {rating.count} ({rating.percent}%)
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="description">
        <div className="description__about">
          <h2>About</h2>
          <div className="aboutText">
            <p>{data.description_raw}</p>
          </div>
        </div>
        <div className="description__more">
          <ul>
            <li>
              <span className="whatInfo">Realeased:</span>{' '}
              <span>{data.released}</span>
            </li>
            <li>
              <span className="whatInfo">Official Website:</span>{' '}
              <a href={data.website}>{data.website}</a>
            </li>
            <li>
              <span className="whatInfo">Reddit url:</span>{' '}
              <a href={data.reddit_url}>{data.reddit_url}</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

GameDetails.propTypes = {
  gameId: PropTypes.string.isRequired,
  game: PropTypes.object.isRequired,
};

export default GameDetails;
