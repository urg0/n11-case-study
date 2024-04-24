import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ReactSVG } from "react-svg";
import CookieService from "@utils/cookies.service";
import { COOKIES } from "@utils/cookies.service";

import { useFormik } from "formik";
import * as Yup from "yup";

import FormikInput from "@components/ui/formik-input/FormikInput";
import PasswordRequirements from "@components/ui/password-requirements/PassowordRequirements";

import { EMAIL_REGEX, PASSWORD_REGEX } from "@constants/regex";
import { getIconPath } from "@utils/utils.service";

import styles from "./Register.module.scss";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .matches(EMAIL_REGEX, "Invalid Email address"),
      password: Yup.string()
        .required("Password is required")
        .matches(PASSWORD_REGEX, "Password must match the requirements"),
    }),
    onSubmit: () => {
      CookieService.setCookie(COOKIES.AUTH_TOKEN, "your_auth_token_here");
      navigate("/dashboard");
    },
  });

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={styles.loginSection}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginContainer}>
          <div className={styles.header}>
            <div className={styles.iconContainer}>
              <ReactSVG src={getIconPath("user")} className={styles.userIcon} />
            </div>
            <p className={styles.title}>Register for a New Account</p>
          </div>
          <form onSubmit={formik.handleSubmit} className={styles.loginBody}>
            <div>
              <FormikInput
                label="Email"
                name="email"
                formik={formik}
                type="email"
                placeholder="ulas@n11.com"
                icon={getIconPath("mail")}
              />
              <FormikInput
                label="Password"
                name="password"
                formik={formik}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                icon={getIconPath("lock")}
                isPassword={true}
                showPassword={showPassword}
                toggleShowPassword={toggleShowPassword}
              />
              <PasswordRequirements password={formik.values.password} />
            </div>
            <div className={styles.loginButtonContainer}>
              <button
                type="submit"
                disabled={!formik.isValid}
                className={styles.loginButton}
              >
                Register
              </button>
            </div>
          </form>
          <div className={styles.routeToRegister}>
            <span>Already have an account?</span>
            <Link to="/login" className={styles.register}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
