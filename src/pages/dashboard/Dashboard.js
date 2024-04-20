import React from "react";

import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import InfoCard from "@components/dashboard/info-card/InfoCard";

import { DUMMY_INFO_CARD_DATA } from "@constants/dummy-data/card";
import {
  lineChartData,
  barChartData,
  pieChartData,
  polarAreaChartData,
} from "@constants/dummy-data/charts";
import Chart from "@components/charts/Chart";
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
      <div className={styles.chartWrapper}>
        <div className={styles.chartContainer}>
          <Chart type="line" data={lineChartData} />
          <Chart type="bar" data={barChartData} />
          <Chart type="pie" data={pieChartData} />
          <Chart type="polarArea" data={polarAreaChartData} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
