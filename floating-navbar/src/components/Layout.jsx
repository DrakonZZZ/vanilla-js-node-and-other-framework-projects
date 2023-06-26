import Navbar from '../components/navbar/Navbar';
import Main from '../components/main/Main';
import Sidebar from '../components/sidebar/Sidebar';
import SecondaryNav from '../components/secondaryMenu/SecondaryNav';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Sidebar />
      <SecondaryNav />
    </>
  );
};

export default Layout;
