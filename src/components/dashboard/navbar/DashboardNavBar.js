import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactSVG } from "react-svg";

import CookieService from "@utils/cookies.service";
import { COOKIES } from "@utils/cookies.service";
import { getIconPath } from "@utils/utils.service";

import { DASHBOARD_NAVIGATION } from "@constants/navigation";
import DashboardLink from "../link/DashboardLink";
import LogoutModal from "../../ui/modal/logout-modal/LogoutModal";

import Logo from "@assets/images/n11-logo.png";
import styles from "./DashboardNavBar.module.scss";

const DashboardNavBar = () => {
  const navigate = useNavigate();

  const [logoutModal, setLogoutModal] = useState(false);

  const handleLogout = () => {
    CookieService.removeCookie(COOKIES.AUTH_TOKEN);
    navigate("/login");
  };

  return (
    <>
      <div className={styles.navigationContainer}>
        <div
          className={styles.logoContainer}
          onClick={() => navigate("/dashboard")}
        >
          <img
            src={Logo}
            alt="logo"
            className={styles.logo}
            onClick={() => navigate("/dashboard")}
          />
        </div>
        <nav className={styles.navigationBar}>
          <div className={styles.overviewNav}>
            <DashboardLink
              key="dashboard"
              title="Overview"
              icon={getIconPath("overview")}
              path="/dashboard"
            />
          </div>
          {DASHBOARD_NAVIGATION.map(({ title, links }) => (
            <React.Fragment key={title}>
              <h2 className={styles.title}>{title}</h2>
              {links.map(({ title, icon, path }) => (
                <DashboardLink
                  key={title}
                  title={title}
                  icon={icon}
                  path={path}
                />
              ))}
            </React.Fragment>
          ))}
        </nav>
        <button
          className={styles.logoutButton}
          onClick={() => setLogoutModal(true)}
        >
          <ReactSVG src={getIconPath("logout")} className={styles.logo} />
          <span className={styles.label}>Logout</span>
        </button>
      </div>
      <LogoutModal
        isOpen={logoutModal}
        onClose={() => setLogoutModal(false)}
        onConfirm={handleLogout}
      >
        Exit
      </LogoutModal>
    </>
  );
};

export default DashboardNavBar;
