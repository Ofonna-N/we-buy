import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
