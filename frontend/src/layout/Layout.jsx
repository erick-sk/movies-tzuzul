import Filter from './Filter';
import Footer from './Footer';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Filter />

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
