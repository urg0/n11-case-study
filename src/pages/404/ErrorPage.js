import React from "react";
import { useNavigate } from "react-router-dom";

import Error from "@assets/images/404.png";

import styles from "./ErrorPage.module.scss";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img src={Error} alt="404" />

      <button className={styles.navigate} onClick={() => navigate("/login")}>
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
