import React from 'react'
import classes from "./index.module.scss"



export default function Tabs({label , isDisabled , isSelected , onChange , count , hasCounter }) {
  return (
    <button disabled={isDisabled}  className={`${classes.container} ${isSelected ? classes.selected : ""}` } onClick={()=> onChange(label)}>{label}
    {hasCounter && <span className={classes.counter}>{count ?? 0}</span>}
    </button>
  )
}
