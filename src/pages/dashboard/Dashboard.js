import React from "react";

import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import { getIconPath } from "@utils/utils.service/";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <DashboardLayout header="Dashboard" icon={getIconPath("user2")}>
      <div>table</div>
    </DashboardLayout>
  );
};

export default Dashboard;
