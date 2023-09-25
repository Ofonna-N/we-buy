import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AppSideMenu from "../../component/menus/AppSideMenu";
import AppSnackbar from "../../component/feedback/AppSnackbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <AppSideMenu />
      <AppSnackbar />
      <Outlet />
    </>
  );
};

export default Layout;
