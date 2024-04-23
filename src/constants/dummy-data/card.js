import { getIconPath } from "@utils/utils.service/";

export const DUMMY_INFO_CARD_DATA = [
  {
    title: "Revenue",
    amount: "$124,005",
    change: "10.24%",
    icon: getIconPath("money-fill"),
  },
  {
    title: "Visitors",
    amount: "345,222",
    change: "4.02%",
    icon: getIconPath("user3"),
  },
  {
    title: "Orders",
    amount: "22,543",
    change: "-2.50%",
    icon: getIconPath("order"),
  },
  {
    title: "Products Sold",
    amount: "1,234",
    change: "8.75%",
    icon: getIconPath("shopping"),
  },
  {
    title: "Margin Rate",
    amount: "45.2%",
    change: "-1.80%",
    icon: getIconPath("line-chart"),
  },
];
