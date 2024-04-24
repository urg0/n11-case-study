import React from "react";
import { ReactSVG } from "react-svg";
import { getIconPath } from "@utils/utils.service";
import styles from "./RecentOrdersTable.module.scss";

const RecentOrdersTables = ({
  applications,
  headers,
  page,
  setPage,
  totalPages,
  isLoading,
}) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const renderPagination = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          disabled={page === i || isLoading}
          onClick={() => setPage(i)}
          className={page === i ? styles.activePage : styles.pageNumbers}
        >
          {i}
        </button>
      );
    }
    return <div className={styles.pagination}>{pages}</div>;
  };

  return (
    <div className={styles.wrapper}>
      <table className={styles.gridTable}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {applications.map((order, index) => (
            <tr key={index}>
              <td>{order.orderId}</td>
              <td>
                <div className={styles.profileContainer}>
                  <img
                    src={order.profilePhoto}
                    alt="Profile"
                    width={32}
                    height={32}
                  />
                  {order.customerName}
                </div>
              </td>
              <td>{order.product}</td>
              <td>{order.amount}</td>
              <td>{formatDate(order.orderDate)}</td>
              <td className={styles.shippingStatusContainer}>
                {order.shippingStatus}
                {order.shippingStatus === "Shipped" ? (
                  <ReactSVG
                    src={getIconPath("check")}
                    className={styles.icon}
                  />
                ) : order.shippingStatus === "Processing" ? (
                  <ReactSVG
                    src={getIconPath("clock")}
                    className={styles.icon}
                  />
                ) : (
                  <ReactSVG
                    src={getIconPath("cross")}
                    className={styles.icon}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.paginationContainer}>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
          className={styles.paginationButton}
        >
          {"<"}
        </button>
        {renderPagination()}
        <button
          onClick={() => setPage((old) => Math.min(old + 1, totalPages))}
          disabled={page === totalPages || applications?.length < 10}
          className={styles.paginationButton}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default RecentOrdersTables;
