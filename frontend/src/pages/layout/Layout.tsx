import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AppSideMenu from "../../component/menus/AppSideMenu";

const Layout = () => {
  return (
    <>
      <Navbar />
      <AppSideMenu />
      <Outlet />
    </>
  );
};

export default Layout;