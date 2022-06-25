import React from "react";
import classes from "./index.module.scss";
export default function Badge({ label }) {
  return (
    <div className={classes.badge}>
      USERNAME <span>{label}</span>
    </div>
  );
}
