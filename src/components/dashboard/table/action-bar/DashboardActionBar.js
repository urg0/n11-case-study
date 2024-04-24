import React, { useState } from "react";

import { ReactSVG } from "react-svg";

import { getIconPath } from "@utils/utils.service/";

import styles from "./DashboardActionBar.module.scss";
import CreateUserModal from "../../../ui/create-user-modal/CreateUserModal";

const DashboardActionBar = ({
  icon,
  title,
  layout,
  children,
  toggleViewList,
  toggleViewGrid,
  activeView,
  handleSearchInput,
  setLastPage,
  addUser = false,
}) => {
  const [createUserModal, setCreateUserModal] = useState(false);

  return (
    <>
      <div className={styles.actionBarContainer}>
        <div className={styles.actions}>
          <div className={styles.searchBar}>
            <ReactSVG
              src={getIconPath("search")}
              className={styles.searchIcon}
            />
            <input
              type="text"
              placeholder="Search..."
              className={styles.searchInput}
              id="searchBarInput"
              onChange={handleSearchInput}
            />
          </div>

          {/* <div className={styles.layoutSwitcher}>
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
      */}
          {addUser && (
            <button
              className={styles.addButton}
              onClick={() => setCreateUserModal(true)}
            >
              <ReactSVG src={getIconPath("add")} className={styles.addIcon} />
              <span>Add user</span>
            </button>
          )}
        </div>
        {children}
      </div>
      <CreateUserModal
        setLastPage={setLastPage}
        isOpen={createUserModal}
        onClose={() => setCreateUserModal(false)}
      />
    </>
  );
};

export default DashboardActionBar;
