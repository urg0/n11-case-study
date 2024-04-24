import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { getIconPath } from "@utils/utils.service";

import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import DashboardActionBar from "@components/dashboard/table/action-bar/DashboardActionBar";
import RecentOrdersTable from "@components/dashboard/table/recent-orders/RecentOrdersTable";

import { DUMMY_ORDER_LIST } from "@constants/dummy-data/order-list";

const RecentOrders = () => {
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 12;

  const fetchOrders = async (page, perPage, filter = "") => {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const filteredData = DUMMY_ORDER_LIST.filter((order) =>
      order.customerName.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredData.slice(startIndex, endIndex);
  };

  const { data: orders, isLoading } = useQuery({
    queryKey: ["orders", page, searchInput],
    queryFn: () => fetchOrders(page, perPage, searchInput),
    options: {
      keepPreviousData: true,
    },
  });

  const totalPages = Math.ceil(DUMMY_ORDER_LIST.length / perPage);

  const handleSearchInput = (e) => {
    setPage(1);
    setSearchInput(e.target?.value);
  };

  return (
    <DashboardLayout header="Recent Orders" icon={getIconPath("shopping")}>
      <DashboardActionBar setSearchInput={handleSearchInput} />
      <RecentOrdersTable
        applications={orders || []}
        headers={[
          "Order ID",
          "Customer Name",
          "Product",
          "Amount",
          "Order Date",
          "Shipping Status",
        ]}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        isLoading={isLoading}
      />
    </DashboardLayout>
  );
};

export default RecentOrders;
