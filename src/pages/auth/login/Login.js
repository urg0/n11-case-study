import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactSVG } from "react-svg";
import CookieService from "@utils/cookies.service";
import { COOKIES } from "@utils/cookies.service";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormikInput from "@components/ui/formik-input/FormikInput";

import { EMAIL_REGEX } from "@constants/regex";
import { getIconPath } from "@utils/utils.service";

import styles from "./Login.module.scss";

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
        .min(8, "Invalid Password"),
    }),
    onSubmit: () => {
      CookieService.setCookie(COOKIES.AUTH_TOKEN, "your_auth_token_here");
      navigate("/");
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
            <p className={styles.title}>Login to your account</p>
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
            </div>
            <div className={styles.loginButtonContainer}>
              <button
                type="submit"
                disabled={!formik.isValid}
                className={styles.loginButton}
              >
                Giriş Yap
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
