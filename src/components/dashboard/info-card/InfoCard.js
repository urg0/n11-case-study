import React from "react";

import styles from "./InfoCard.module.scss";

const InfoCard = ({ title, amount, change }) => {
  const changeClass =
    change.charAt(0) === "-" ? styles.negative : styles.positive;

  if (change.charAt(0) === "-") {
    console.log("negative");
  } else {
    console.log("posit");
  }

  return (
    <div className={changeClass}>
      <div className={styles.title}>{title}</div>
      <div className={styles.amount}>{amount}</div>
      <div className={styles.change}>{change}</div>
    </div>
  );
};

export default InfoCard;
