import {type PropsWithChildren} from "react";
import classes from "./container.module.css";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={classes["rounded-container"]}>{children}</div>;
};

Container.displayName = "Container";

export default Container;
