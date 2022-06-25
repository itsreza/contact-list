import React, { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import classes from "./index.module.scss";
export default function Dialog({ anchorPoint, onClose, children }) {
  const ref = useRef();

  // Using hook for Click Away From Dialog
  useOnClickOutside(ref, () => onClose?.());

  return (
    <div
      ref={ref}
      className={classes.dialog}
      style={{
        top: anchorPoint.y,
        left: anchorPoint.x,
      }}
    >
      {children}
      <button
        onClick={onClose}
        class={classes.close_button}
        aria-label="Close alert"
        type="button"
        data-close
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}
