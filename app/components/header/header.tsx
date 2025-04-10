import { type PropsWithChildren, type ReactNode } from "react";
import classes from "./header.module.css";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";

interface HeaderProps extends PropsWithChildren {
  tabs?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children, tabs }) => {
  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <Breadcrumbs />
        {children}
      </div>
      {tabs}
    </header>
  );
};

Header.displayName = "Header";

export default Header;
