import React from "react";

import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import InfoCard from "@components/dashboard/info-card/InfoCard";

import { DUMMY_INFO_CARD_DATA } from "@constants/dummy-data/card";
import { getIconPath } from "@utils/utils.service/";

import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <DashboardLayout header="Dashboard" icon={getIconPath("user2")}>
      <div className={styles.contentContainer}>
        {DUMMY_INFO_CARD_DATA.map(({ title, amount, change }) => {
          return <InfoCard title={title} amount={amount} change={change} />;
        })}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
