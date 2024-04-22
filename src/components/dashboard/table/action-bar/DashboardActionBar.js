import React from "react";

import { useState } from "react";
import { ReactSVG } from "react-svg";

import { getIconPath } from "@utils/utils.service/";

import styles from "./DashboardActionBar.module.scss";

const DashboardActionBar = ({
  icon,
  title,
  layout,
  children,
  toggleViewList,
  toggleViewGrid,
  activeView,
  setSearchInput,
}) => {
  return (
    <div className={styles.actionBarContainer}>
      {/* <div className={styles.actions}>
        <div className={styles.searchBar}>
          <ReactSVG src={getIconPath("mail")} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Arama yapın.."
            className={styles.searchInput}
            id="searchBarInput"
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        <div className={styles.layoutSwitcher}>
          <ReactSVG
            onClick={toggleViewList}
            src={getIconPath("mail")}
            className={`${styles.layoutIcon} ${
              activeView === "list" ? styles.active : ""
            }`}
          />
          <ReactSVG
            onClick={toggleViewGrid}
            src={getIconPath("mail")}
            className={`${styles.layoutIcon} ${
              activeView === "grid" ? styles.active : ""
            }`}
          />
        </div>
        <button className={styles.addButton}>
          <ReactSVG src={getIconPath("mail")} className={styles.addIcon} />
          <span>Yeni Ekle</span>
        </button>
      </div> */}
      {children}
    </div>
  );
};

export default DashboardActionBar;
