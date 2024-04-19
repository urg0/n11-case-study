import React from "react";
import DashboardNavBar from "@components/dashboard/navbar/DashboardNavBar";
import Footer from "@components/dashboard/footer/Footer";

import styles from "./DashboardLayout.module.scss";
import DashboardHeader from "@components/dashboard/header/DashboardHeader";

const DashboardLayout = ({ children, header, icon }) => {
  return (
    <div className={styles.dashboardLayoutContainer}>
      <DashboardNavBar />
      <div className={styles.wrapper}>
        <DashboardHeader header={header} icon={icon} />
        <div className={styles.dashboardContent}>{children}</div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
