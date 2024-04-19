import React from "react";
import { NavLink } from "react-router-dom";

import { ReactSVG } from "react-svg";

import styles from "./DashboardLink.module.scss";

const DashboardLink = ({ title, icon, path }) => {
  return (
    <li className={styles.navItem}>
      <NavLink
        exact
        to={path}
        className={({ isActive }) =>
          isActive ? styles.active : styles.navLink
        }
      >
        <ReactSVG src={icon} className={styles.icon} />
        <span className={styles.navTitle}>{title}</span>
      </NavLink>
    </li>
  );
};

export default DashboardLink;
