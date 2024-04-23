import React, { useState, useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import { getIconPath } from "@utils/utils.service";

import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import DashboardTable from "@components/dashboard/table/DashboardTable";
import DashboardActionBar from "@components/dashboard/table/action-bar/DashboardActionBar";

import { DUMMY_USER_LIST } from "@constants/dummy-data/user-list";

const fetchProjects = async (page, perPage, filter = "") => {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const filteredData = DUMMY_USER_LIST.filter((application) =>
    application.investorProfile.name
      .toLowerCase()
      .includes(filter.toLowerCase())
  );
  return filteredData.slice(startIndex, endIndex);
};

const CustomerProfiles = () => {
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 10;

  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects", page, searchInput],
    queryFn: () => fetchProjects(page, perPage, searchInput),
    options: {
      keepPreviousData: true,
    },
  });

  const totalPages = Math.ceil(DUMMY_USER_LIST.length / perPage);

  const handleSearchInput = (e) => {
    setPage(1);
    setSearchInput(e.target?.value);
  };

  return (
    <DashboardLayout header="Costumer Profiles" icon={getIconPath("file-user")}>
      <DashboardActionBar setSearchInput={handleSearchInput} />
      <DashboardTable
        applications={projects || []}
        headers={[
          "Customer Name",
          "Order ID",
          "Product Category",
          "Payment Status",
          "Order Amount",
          "Order Date",
        ]}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        isLoading={isLoading}
      />
    </DashboardLayout>
  );
};

export default CustomerProfiles;
