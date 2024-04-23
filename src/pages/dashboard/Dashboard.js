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
    <DashboardLayout header="Dashboard" icon={getIconPath("overview")}>
      <div className={styles.contentContainer}>
        {DUMMY_INFO_CARD_DATA.map(({ title, amount, change, icon }) => {
          return (
            <InfoCard
              title={title}
              amount={amount}
              change={change}
              icon={icon}
            />
          );
        })}
      </div>
      <div className={styles.chartWrapper}>
        <div className={styles.chartContainer}>
          <div className={styles.wrapper}>
            <Chart type="line" data={lineChartData} height={250} width={700} />
            <div className={styles.flex}>
              <Chart type="pie" data={pieChartData} height={120} width={120} />
              <Chart
                type="polarArea"
                data={polarAreaChartData}
                height={200}
                width={200}
              />
            </div>
          </div>
        </div>
        <div className={styles.barChartContainer}>
          <Chart type="bar" data={barChartData} height={300} width={300} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
