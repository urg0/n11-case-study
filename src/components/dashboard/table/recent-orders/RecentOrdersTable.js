import React from "react";
import { ReactSVG } from "react-svg";

import { getIconPath, formatDate } from "@utils/utils.service";

import styles from "./RecentOrdersTable.module.scss";

const RecentOrdersTable = ({
  applications,
  headers,
  page,
  setPage,
  totalPages,
  isLoading,
}) => {
  const renderPagination = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
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
                    src={order.avatar}
                    alt="Profile"
                    width={32}
                    height={32}
                    className={styles.customarImage}
                  />
                  {order.name}
                </div>
              </td>
              <td>{order.product}</td>
              <td>{order.amount}</td>
              <td>{formatDate(order.orderDate)}</td>
              <td className={styles.shippingStatusContainer}>
                {order.shippingStatus ? (
                  <>
                    <span>Delivered</span>
                    <ReactSVG
                      src={getIconPath("check")}
                      className={styles.icon}
                    />
                  </>
                ) : (
                  <>
                    <span>Shipping</span>
                    <ReactSVG
                      src={getIconPath("clock")}
                      className={styles.icon}
                    />
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.paginationContainer}>
        <button
          onClick={() => setPage((prevPage) => prevPage - 1)}
          disabled={page === 1 || isLoading}
          className={styles.paginationButton}
        >
          {"<"}
        </button>
        {renderPagination()}
        <button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={page === totalPages || isLoading}
          className={styles.paginationButton}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default RecentOrdersTable;
