import Aside from '../components/Aside';
import Games from '../components/Games';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <div className="homeGrid">
        <Aside />
        <Games />
      </div>
      <Footer />
    </>
  );
};

export default Home;
