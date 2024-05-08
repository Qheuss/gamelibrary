import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Genres from './Genres';

const Aside = ({ data, setFilteredData }) => {
  return (
    <aside>
      <NavLink to={`/`}>
        <img className="logo" src="../src/assets/images/logo.svg" alt="logo" />
      </NavLink>
      <div className="aside__content">
        <h2>Game Library</h2>
        <h3>Categories</h3>
        <h4>Genres</h4>
        <Genres data={data} setFilteredData={setFilteredData} />
      </div>
    </aside>
  );
};

Aside.propTypes = {
  data: PropTypes.array.isRequired,
  setFilteredData: PropTypes.func.isRequired,
};

export default Aside;
