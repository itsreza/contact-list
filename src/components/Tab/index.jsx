import React from "react";
import classes from "./index.module.scss";
export default function Tab({ children }) {
  return <div className={classes.tab_container}>{children}</div>;
}
