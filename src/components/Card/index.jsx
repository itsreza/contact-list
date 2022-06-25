import React from "react";
import Badge from "../Badge";
import classes from "./index.module.scss";
export default function Card({ selectedContact }) {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.imageContainer}>
          <img
            src={selectedContact?.picture?.large}
            alt={selectedContact?.name?.last}
          />
        </div>
        <div className={classes.info_section}>
          <div className={classes.full_name_row}>
            {selectedContact?.name?.last}, {selectedContact?.name?.first}
          </div>
          <div>
            <span className={classes.info_row_label}>e-mail</span>
            <span className={classes.info_row_value}>
              {selectedContact?.email}
            </span>
          </div>
          <div>
            <span className={classes.info_row_label}>phone</span>{" "}
            <span>{selectedContact?.phone}</span>
          </div>
          <div>
            <span className={classes.info_row_label}>street</span>
            <span>{selectedContact?.location?.street?.name}</span>
          </div>
          <div>
            <span className={classes.info_row_label}>city</span>
            <span>{selectedContact?.location?.city}</span>
          </div>
          <div>
            <span className={classes.info_row_label}>state</span>
            <span>{selectedContact?.location?.state}</span>
          </div>
          <div>
            <span className={classes.info_row_label}>postcode</span>
            <span>{selectedContact?.location?.postcode}</span>
          </div>
        </div>
      </div>
      <Badge label={selectedContact?.login?.username} />
    </div>
  );
}
