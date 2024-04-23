import React from "react";

import { ReactSVG } from "react-svg";

import styles from "./InfoCard.module.scss";

const InfoCard = ({ title, amount, change, icon }) => {
  const changeClass =
    change.charAt(0) === "-" ? styles.negative : styles.positive;

  if (change.charAt(0) === "-") {
    console.log("negative");
  } else {
    console.log("posit");
  }

  return (
    <div className={changeClass}>
      <ReactSVG src={icon} className={styles.icon} />
      <div className={styles.title}>{title}</div>
      <div className={styles.amount}>{amount}</div>
      <div className={styles.change}>{change}</div>
    </div>
  );
};

export default InfoCard;
