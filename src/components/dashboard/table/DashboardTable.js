import React from "react";

import { ReactSVG } from "react-svg";
import { getIconPath } from "@utils/utils.service/";

import styles from "./DashboardTable.module.scss";

const numberFormatter = (num) => {
  const numStr = num.toString().replace(/\./g, "");
  return numStr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const InvestmentTable = ({ applications, headers }) => {
  return (
    <table className={styles.gridTable}>
      <thead>
        <tr>
          {headers.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {applications.map((application, index) => (
          <tr
            /* onClick={() => router.push(`/dashboard/startups/${application.ID}`)} */
            key={index}
          >
            <td>
              <img
                className={styles.companyLogo}
                src={application.investorProfile.profilePhoto}
                alt="company-logo"
                width={36}
                height={36}
              />
              {`${application.investorProfile.name} ${application.investorProfile.surname}`}
            </td>
            <td>{application.projectID}</td>
            <td>{application.sektör}</td>
            <td>
              <span className={styles.fundingStage}>
                {application.status === "Tamamlandı" ? (
                  <>
                    <ReactSVG
                      src={getIconPath("mail")}
                      className={styles.icon}
                    />
                    <span>Tamamlandı</span>
                  </>
                ) : (
                  <>
                    <ReactSVG
                      src={getIconPath("mail")}
                      className={styles.icon}
                    />
                    <span>Bekliyor</span>
                  </>
                )}
              </span>
            </td>
            <td>
              <span className={styles.fundingStage}>
                {numberFormatter(application.tutar)}₺
              </span>
            </td>
            <td>
              <span className={styles.fundingStage}>
                <ReactSVG src={getIconPath("mail")} className={styles.icon} />
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
  );
};

export default InvestmentTable;
