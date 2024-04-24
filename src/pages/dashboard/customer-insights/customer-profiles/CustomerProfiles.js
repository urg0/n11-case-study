import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { fetchData, eventsUrl, queryClient } from "@services/api.service";
import { getIconPath } from "@utils/utils.service";

import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import DashboardTable from "@components/dashboard/table/DashboardTable";
import DashboardActionBar from "@components/dashboard/table/action-bar/DashboardActionBar";

const fetchProfiles = async (page, perPage, filter = "") => {
  const orders = await fetchData(`${eventsUrl}/e-commerce-api`);

  const filteredData = orders.filter((order) =>
    order.name.toLowerCase().includes(filter.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / perPage);

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  return {
    data: filteredData.slice(startIndex, endIndex),
    totalPages: totalPages,
  };
};
const CustomerProfiles = () => {
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 10;

  const { data: userData, isLoading } = useQuery({
    queryKey: ["users", page, searchInput],
    queryFn: () => fetchProfiles(page, perPage, searchInput),
    config: {
      keepPreviousData: true,
      onSuccess: () => {
        queryClient.invalidateQueries(["users", page, searchInput]);
      },
    },
  });

  const users = userData?.data || [];
  const totalPages = userData?.totalPages || 0;

  const handleSearchInput = (e) => {
    setPage(1);
    setSearchInput(e.target.value);
  };

  return (
    <DashboardLayout header="Customer Profiles" icon={getIconPath("file-user")}>
      <DashboardActionBar setSearchInput={handleSearchInput} />
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <DashboardTable
          applications={users}
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
      )}
    </DashboardLayout>
  );
};

export default CustomerProfiles;
