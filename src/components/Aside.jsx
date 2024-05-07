import { NavLink } from 'react-router-dom';

const Aside = () => {
  return (
    <aside>
      <NavLink to={`/`}>
        <img className="logo" src="../src/assets/images/logo.svg" alt="logo" />
      </NavLink>
      <div className="aside__content">
        <h2>Game Library</h2>
        <h3>Categories</h3>
        <h4>All games</h4>
      </div>
    </aside>
  );
};

export default Aside;
