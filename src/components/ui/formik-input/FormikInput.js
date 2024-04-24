import React from "react";
import { ReactSVG } from "react-svg";

import { getIconPath } from "@utils/utils.service";

import "./FormikInput.scss";

const FormikInput = ({
  label,
  name,
  formik,
  placeholder,
  icon,
  type,
  isPassword = false,
  showPassword,
  toggleShowPassword,
}) => {
  const showHideIcon = showPassword
    ? getIconPath("hide-password")
    : getIconPath("show-password");

  return (
    <>
      <div className="input-container">
        <label htmlFor={name} className="label">
          {label}
        </label>
        <div className="input-wrapper">
          {icon && <ReactSVG src={icon} className="input-icon" />}
          <input
            className="input"
            type={type}
            id={name}
            name={name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[name]}
            placeholder={placeholder}
          />
          {isPassword && (
            <ReactSVG
              src={showHideIcon}
              className="showPasswordIcon"
              onClick={toggleShowPassword}
            />
          )}
        </div>
      </div>
      {formik.touched[name] && formik.errors[name] && (
        <div className="error-message">*{formik.errors[name]}</div>
      )}
    </>
  );
};

export default FormikInput;
