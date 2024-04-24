import React from "react";
import Modal from "../Modal";

import styles from "./LogoutModal.module.scss";

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.logoutContainer}>
        <div className={styles.logoutMessage}>
          Are you sure you want to log out?
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.logoutButton} onClick={onConfirm}>
            Logout
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LogoutModal;
