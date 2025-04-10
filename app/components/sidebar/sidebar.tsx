import { Link, useLocation } from "react-router";
import {
  NvIcon,
  NvIconbutton,
  NvTooltip,
} from "@nova-design-system/nova-react";
import clsx from "clsx";

import Logo from "../logo/logo";
import classes from "./sidebar.module.css";

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();

  const links = [
    { path: "/", label: "Home", icon: "home" },
    { path: "/support", label: "Support", icon: "help" },
  ];

  const isActive = (path: string): boolean =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  const handleToggleDarkMode = () => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle("dark");
  };

  return (
    <nav className={`${classes.sidebar} nv-sidenav`}>
      <Logo />

      <ul role="list">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              className={clsx("nv-link", isActive(link.path) && "active")}
              to={link.path}
            >
              <NvIcon
                aria-label={`${link.icon}-icon`}
                name={link.icon}
                role="img"
                size="md"
              />
              {link.label}
            </Link>
          </li>
        ))}

        <hr className="mt-auto" />

        <div className="flex justify-between">
          <NvTooltip message="Notification center" placement="top">
            <NvIconbutton name="bell" emphasis="low" />
          </NvTooltip>

          <NvTooltip message="App settings" placement="top">
            <NvIconbutton name="settings" emphasis="low" />
          </NvTooltip>

          <Link to="/support">
            <NvTooltip message="Support" placement="top">
              <NvIconbutton name="headset" emphasis="low" />
            </NvTooltip>
          </Link>

          <NvTooltip message="Toggle dark / light" placement="top">
            <NvIconbutton
              name="bulb"
              emphasis="low"
              onClick={handleToggleDarkMode}
            />
          </NvTooltip>
        </div>
      </ul>
    </nav>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
