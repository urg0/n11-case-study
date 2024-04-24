import ReactDOM from "react-dom";
import { ReactSVG } from "react-svg";

import { getIconPath } from "@utils/utils.service";

import styles from "./Modal.module.scss";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(event) => event.stopPropagation()}
      >
        <ReactSVG
          src={getIconPath("cross")}
          className={styles.closeIcon}
          onClick={onClose}
        />
        {children}
        {/* OPTIMIZE: Can add cancel and approve button */}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
