import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AppSideMenu from "../../component/menus/AppSideMenu";
import AppSnackbar from "../../component/feedback/AppSnackbar";
import AppWideModals from "./components/modals/AppWideModals";

const Layout = () => {
  return (
    <>
      <Navbar />
      <AppSideMenu />
      <AppSnackbar />
      <AppWideModals />
      <Outlet />
    </>
  );
};

export default Layout;
