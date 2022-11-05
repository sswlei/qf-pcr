import { Outlet } from "react-router-dom";
import NavBar from "../General/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;