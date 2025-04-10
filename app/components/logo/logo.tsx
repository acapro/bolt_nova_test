import React from "react";
import classes from "./logo.module.css";
import icon from "./nova-icon.svg";

const Logo: React.FC = () => {
  return (
    <span className={classes.logo} role="img" aria-label="Nova logo">
      <img src={icon} alt="Nova logo" />
      <div className={classes.title}>nova</div>
    </span>
  );
};

Logo.displayName = "Logo";

export default Logo;
