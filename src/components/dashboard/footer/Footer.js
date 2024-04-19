import React from "react";

import Logo from "@assets/images/n11-logo.png";

import styles from "./Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <img src={Logo} alt="logo" className={styles.logo} />
      <span className={styles.year}>© {currentYear}</span>
    </div>
  );
};

export default Footer;
