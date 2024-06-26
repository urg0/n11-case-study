import React from "react";

import { ReactSVG } from "react-svg";
import { getIconPath } from "@utils/utils.service/";

import styles from "./DashboardTable.module.scss";

const numberFormatter = (num) => {
  const numStr = num?.toString().replace(/\./g, "");
  return numStr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const DashboardTable = ({
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
            {headers.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
          {applications?.length === 0 && (
            <div className={styles.userNotFound}>No users found. Misspell?</div>
          )}
        </thead>

        <tbody>
          {applications.map((application, index) => (
            <tr
              /* onClick={() => router.push(`/dashboard/startups/${application.ID}`)} */
              key={index}
            >
              <td>
                <div className={styles.profileContainer}>
                  <img
                    className={styles.companyLogo}
                    src={application.avatar}
                    alt="company-logo"
                    width={36}
                    height={36}
                  />
                  {application.name}
                </div>
              </td>
              <td>{application.id}</td>
              <td>{application.productCategory}</td>
              <td>
                <span className={styles.fundingStage}>
                  {application.paymentStatus ? (
                    <>
                      <ReactSVG
                        src={getIconPath("check")}
                        className={styles.icon}
                      />
                      <span>Completed</span>
                    </>
                  ) : (
                    <>
                      <ReactSVG
                        src={getIconPath("cross")}
                        className={styles.icon}
                      />
                      <span>No Approval</span>
                    </>
                  )}
                </span>
              </td>
              <td>
                <span className={styles.fundingStage}>
                  <ReactSVG
                    src={getIconPath("money")}
                    className={styles.icon}
                  />
                  {numberFormatter(application.orderAmount)}$
                </span>
              </td>
              <td>
                <span className={styles.fundingStage}>
                  <ReactSVG
                    src={getIconPath("calendar")}
                    className={styles.icon}
                  />
                  {new Date(application.createdAt).toLocaleDateString("tr-TR", {
                    timeZone: "Europe/Istanbul",
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })}
                </span>
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
          onClick={() => setPage((old) => old + 1)}
          disabled={applications?.length < 10}
          className={styles.paginationButton}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default DashboardTable;
