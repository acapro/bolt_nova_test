import { Outlet } from "react-router";

import classes from "./layout.module.css";
import Sidebar from "../sidebar/sidebar";

const Layout: React.FC = () => {
  return (
    <div className={classes.layout}>
      <Sidebar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

Layout.displayName = "Layout";

export default Layout;
