import React from "react";
import DashboardNavBar from "@components/dashboard/navbar/DashboardNavBar";
import Footer from "@components/dashboard/footer/Footer";

import styles from "./DashboardLayout.module.scss";

const DashboardLayout = () => {
  return (
    <div className={styles.dashboardLayoutContainer}>
      <DashboardNavBar />
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
