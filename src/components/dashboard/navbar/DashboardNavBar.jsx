import React from "react";

import { ReactSVG } from "react-svg";

import { DASHBOARD_NAVIGATION } from "@constants/navigation";
import DashboardLink from "../link/DashboardLink";

import Logo from "@assets/images/n11-logo.png";
import { getIconPath } from "@utils/utils.service";
import styles from "./DashboardNavBar.module.scss";

const DashboardNavBar = () => {
  return (
    <div className={styles.navigationContainer}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="logo" className={styles.logo} />
      </div>
      <nav className={styles.navigationBar}>
        {DASHBOARD_NAVIGATION.map(({ title, links }) => (
          <React.Fragment key={title}>
            <h2 className={styles.title}>{title}</h2>
            {links.map(({ title, icon, path }) => (
              <DashboardLink
                key={title}
                title={title}
                icon={getIconPath("mail")}
                path={path}
              />
            ))}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default DashboardNavBar;
