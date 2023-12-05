import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar.jsx/navbar';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
