import React from "react";
import { Link, useLocation } from "react-router";
import { NvIcon } from "@nova-design-system/nova-react";

export interface Tab {
  path: string;
  label: string;
  icon: string;
  disabled?: boolean;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const location = useLocation();

  const isActive = (path: string): boolean => {
    if (path === "#") return false;
    return location.pathname === path;
  };

  return (
    <nav className="nv-tabs border-none">
      <ul className="flex">
        {tabs.map((tab) => (
          <li key={tab.path}>
            <Link
              to={tab.path}
              className={`nv-link ${isActive(tab.path) ? "active" : ""} ${
                tab.disabled ? "disabled" : ""
              }`}
              aria-disabled={tab.disabled ? "true" : "false"}
              onClick={(e) => {
                if (tab.disabled) {
                  e.preventDefault();
                }
              }}
            >
              <NvIcon name={tab.icon} size="md" />
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
