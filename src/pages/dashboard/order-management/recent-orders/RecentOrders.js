import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getIconPath } from "@utils/utils.service";
import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import DashboardActionBar from "@components/dashboard/table/action-bar/DashboardActionBar";
import RecentOrdersTable from "@components/dashboard/table/recent-orders/RecentOrdersTable";
import { fetchData, eventsUrl, queryClient } from "@services/api.service";

const RecentOrders = () => {
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 12;

  const fetchOrders = async (page, perPage, filter = "") => {
    const orders = await fetchData(`${eventsUrl}/order-list`);

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

  const { data: orderData, isLoading } = useQuery({
    queryKey: ["orders", page, searchInput],
    queryFn: () => fetchOrders(page, perPage, searchInput),
    config: {
      keepPreviousData: true,
      onSuccess: () => {
        queryClient.invalidateQueries(["orders", page, searchInput]);
      },
    },
  });

  const orders = orderData?.data || [];
  const totalPages = orderData?.totalPages || 0;

  const handleSearchInput = (e) => {
    setPage(1);
    setSearchInput(e.target.value);
  };

  return (
    <DashboardLayout header="Recent Orders" icon={getIconPath("shopping")}>
      <DashboardActionBar handleSearchInput={handleSearchInput} />
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <RecentOrdersTable
          applications={orders}
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
      )}
    </DashboardLayout>
  );
};

export default RecentOrders;
