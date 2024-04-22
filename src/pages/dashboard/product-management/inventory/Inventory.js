import React, { useState } from "react";

import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import DashboardTable from "@components/dashboard/table/DashboardTable";

import { getIconPath } from "@utils/utils.service/";

import styles from "./Inventory.module.scss";
import DashboardActionBar from "../../../../components/dashboard/table/action-bar/DashboardActionBar";

const data = [
  {
    tutar: 100000,
    investorProfile: {
      /*       profilePhoto: Memoji, */
      name: "Ulaş Rotinda",
      surname: "Güler",
    },
    sektör: "Finance",
    projectID: "4",
    status: "Tamamlandı",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /* profilePhoto: Memoji, */
      name: "Ulaş Rotinda",
      surname: "Güler",
    },
    sektör: "Tech",
    projectID: "2",
    status: "Bekliyor",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /* profilePhoto: Memoji, */
      name: "Ulaş Rotinda",
      surname: "Güler",
    },
    sektör: "Tech",
    projectID: "2",
    status: "Yayınlandı",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /* profilePhoto: Memoji, */
      name: "Arda",
      surname: "Turan",
    },
    sektör: "Tech",
    projectID: "2",
    status: "Bekliyor",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /*       profilePhoto: Memoji, */
      name: "Ulaş Rotinda",
      surname: "Güler",
    },
    sektör: "Finance",
    projectID: "4",
    status: "Tamamlandı",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /* profilePhoto: Memoji, */
      name: "Ulaş Rotinda",
      surname: "Güler",
    },
    sektör: "Tech",
    projectID: "2",
    status: "Bekliyor",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /* profilePhoto: Memoji, */
      name: "Ulaş Rotinda",
      surname: "Güler",
    },
    sektör: "Tech",
    projectID: "2",
    status: "Yayınlandı",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /* profilePhoto: Memoji, */
      name: "Arda",
      surname: "Turan",
    },
    sektör: "Tech",
    projectID: "2",
    status: "Bekliyor",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /*       profilePhoto: Memoji, */
      name: "Ulaş Rotinda",
      surname: "Güler",
    },
    sektör: "Finance",
    projectID: "4",
    status: "Tamamlandı",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /* profilePhoto: Memoji, */
      name: "Ulaş Rotinda",
      surname: "Güler",
    },
    sektör: "Tech",
    projectID: "2",
    status: "Bekliyor",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /* profilePhoto: Memoji, */
      name: "Ulaş Rotinda",
      surname: "Güler",
    },
    sektör: "Tech",
    projectID: "2",
    status: "Yayınlandı",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /* profilePhoto: Memoji, */
      name: "Arda",
      surname: "Turan",
    },
    sektör: "Tech",
    projectID: "2",
    status: "Bekliyor",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /*       profilePhoto: Memoji, */
      name: "Ulaş Rotinda",
      surname: "Güler",
    },
    sektör: "Finance",
    projectID: "4",
    status: "Tamamlandı",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /* profilePhoto: Memoji, */
      name: "Ulaş Rotinda",
      surname: "Güler",
    },
    sektör: "Tech",
    projectID: "2",
    status: "Bekliyor",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /* profilePhoto: Memoji, */
      name: "Ulaş Rotinda",
      surname: "Güler",
    },
    sektör: "Tech",
    projectID: "2",
    status: "Yayınlandı",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /* profilePhoto: Memoji, */
      name: "Arda",
      surname: "Turan",
    },
    sektör: "Tech",
    projectID: "2",
    status: "Bekliyor",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /*       profilePhoto: Memoji, */
      name: "Ulaş Rotinda",
      surname: "Güler",
    },
    sektör: "Finance",
    projectID: "4",
    status: "Tamamlandı",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /* profilePhoto: Memoji, */
      name: "Ulaş Rotinda",
      surname: "Güler",
    },
    sektör: "Tech",
    projectID: "2",
    status: "Bekliyor",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /* profilePhoto: Memoji, */
      name: "Ulaş Rotinda",
      surname: "Güler",
    },
    sektör: "Tech",
    projectID: "2",
    status: "Yayınlandı",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /* profilePhoto: Memoji, */
      name: "Arda",
      surname: "Turan",
    },
    sektör: "Tech",
    projectID: "2",
    status: "Bekliyor",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /*       profilePhoto: Memoji, */
      name: "Ulaş Rotinda",
      surname: "Güler",
    },
    sektör: "Finance",
    projectID: "4",
    status: "Tamamlandı",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /* profilePhoto: Memoji, */
      name: "Ulaş Rotinda",
      surname: "Güler",
    },
    sektör: "Tech",
    projectID: "2",
    status: "Bekliyor",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /* profilePhoto: Memoji, */
      name: "Ulaş Rotinda",
      surname: "Güler",
    },
    sektör: "Tech",
    projectID: "2",
    status: "Yayınlandı",
    createdAt: "02-02-2020",
  },
  {
    tutar: 100000,
    investorProfile: {
      /* profilePhoto: Memoji, */
      name: "Arda",
      surname: "Turan",
    },
    sektör: "Tech",
    projectID: "2",
    status: "Bekliyor",
    createdAt: "02-02-2020",
  },
];

const Inventory = () => {
  const [searchInput, setSearchInput] = useState("");

  const filteredApplications = searchInput
    ? data.filter((application) =>
        application.investorProfile.name
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      )
    : data;

  return (
    <DashboardLayout header="Inventory" icon={getIconPath("user2")}>
      <DashboardActionBar setSearchInput={(e) => setSearchInput(e)} />
      <DashboardTable
        applications={filteredApplications}
        headers={[
          "Üye",
          "Başvurduğu Girişim",
          "Sektör",
          "Hesap Onayı",
          "Alışveriş Miktarı",
          "Üyelik Tarihi",
        ]}
      />
    </DashboardLayout>
  );
};

export default Inventory;
