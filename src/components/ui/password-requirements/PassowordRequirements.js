import React from "react";

import { validatePassword } from "@utils/validate-password";
import { getIconPath } from "@utils/utils.service";

import { ReactSVG } from "react-svg";

import styles from "./PasswordRequirements.module.scss";

const PASSWORD_REQUIREMENTS = [
  "At least 8 characters",
  "At least one uppercase letter",
  "At least one lowercase letter",
  "At least one digit",
];

//Gets the strength bar count and color based on the met requirements.
const strengthInfo = {
  4: { count: 0, colorClass: "" },
  3: { count: 1, colorClass: styles.red },
  2: { count: 2, colorClass: styles.orange },
  1: { count: 2, colorClass: styles.orange },
  0: { count: 3, colorClass: styles.green },
};

const PasswordRequirements = ({ password }) => {
  const { errors } = validatePassword(password);

  const passwordRequirementNotMet = (requirement) =>
    errors.includes(requirement);

  const { count, colorClass } = strengthInfo[errors.length] || {};

  return (
    <div className={styles.passwordRequirementContainer}>
      <div className={styles.strengthContainer}>
        {Array.from({ length: count }, (_, index) => (
          <span
            key={index}
            className={`${styles.strengthMeter} ${colorClass}`}
          ></span>
        ))}

        {Array.from({ length: 3 - count }, (_, index) => (
          <span key={index} className={styles.strengthMeter}></span>
        ))}
      </div>
      {PASSWORD_REQUIREMENTS.map((requirement) => (
        <div className={styles.requirement} key={requirement}>
          <ReactSVG
            src={
              passwordRequirementNotMet(requirement)
                ? getIconPath("cross")
                : getIconPath("check")
            }
            className={styles.icon}
          />
          <span className={styles.label}>{requirement}</span>
        </div>
      ))}
    </div>
  );
};

export default PasswordRequirements;
