import React from "react";

import styles from "./DashboardHeader.module.scss";
import { ReactSVG } from "react-svg";

const DashboardHeader = ({ header, icon }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.wrapper}>
        <ReactSVG src={icon} className={styles.icon} />
        <h2 className={styles.header}>{header}</h2>
      </div>
      <div>Welcome back, Ulaş!</div>
    </div>
  );
};

export default DashboardHeader;
