import { getIconPath } from "@utils/utils.service";

export const DASHBOARD_NAVIGATION = [
  {
    title: "Customer Insights",
    links: [
      {
        title: "Customer Profiles",
        icon: getIconPath("file-user"),
        path: "/dashboard/customers",
      },
      {
        title: "Feedback",
        /* icon: UserLine.src, */
        path: "/dashboard/feedback",
      },
    ],
  },

  {
    title: "Order Management",
    links: [
      {
        title: "Recent Orders",
        icon: getIconPath("shopping"),
        path: "/dashboard/recent-orders",
      },
      {
        title: "Returns",
        /* icon: UserLine.src, */
        path: "/dashboard/returns",
      },
    ],
  },

  {
    title: "Product Management",
    links: [
      {
        title: "Inventory",
        /* icon: getIconPath("file-user"), */
        path: "/dashboard/inventory",
      },
      {
        title: "Categories",
        /* icon: UserLine.src, */
        path: "/dashboard/categories",
      },
      {
        title: "Suppliers",
        /* icon: UserLine.src, */
        path: "/dashboard/suppliers",
      },
      {
        title: "Best Sellers",
        /* icon: UserLine.src, */
        path: "/dashboard/best-sellers",
      },
    ],
  },
  {
    title: "Marketing",
    links: [
      {
        title: "Campaigns",
        /* icon: UserLine.src, */
        path: "/dashboard/campaigns",
      },
    ],
  },
  {
    title: "Reporting",
    links: [
      {
        title: "Sales Reports",
        /* icon: UserLine.src, */
        path: "/dashboard/sales-reports",
      },
      {
        title: "Performance Metrics",
        /* icon: UserLine.src, */
        path: "/dashboard/performance",
      },
    ],
  },
];
