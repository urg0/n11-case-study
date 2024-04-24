export const lineChartData = {
  title: "Monthly Sales Overview",
  description:
    "This line chart displays the trend of monthly sales in dollars over the first seven months of the year.",
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Monthly Sales ($)",
      data: [12000, 19000, 17000, 22000, 15000, 21000, 24000],
      fill: false,
      borderColor: "#4285F4",
      tension: 0.1,
    },
  ],
};

export const barChartData = {
  title: "Sales Distribution by Category",
  description: "The bar chart breaks down total sales by product category.",
  labels: [
    "Electronics",
    "Apparel",
    "Home Goods",
    "Books",
    "Beauty Products",
    "Fitness",
  ],
  datasets: [
    {
      label: "Sales by Category ($)",
      data: [15000, 12000, 8000, 4000, 7000, 8500],
      backgroundColor: [
        "#6936f5",
        "#4285F4",
        "#30A9DE",
        "#34A853",
        "#9E9E9E",
        "#F2994A",
      ],
    },
  ],
};

export const pieChartData = {
  title: "Payment Method Usage",
  description:
    "This pie chart illustrates the distribution of payment methods used by customers.",
  labels: ["Credit Card", "PayPal", "Bank Transfer"],
  datasets: [
    {
      label: "Payment Methods",
      data: [55, 25, 20],
      backgroundColor: ["#34A853", "#4285F4", "#F2994A"],
    },
  ],
};

export const polarAreaChartData = {
  title: "Customer Acquisition Channels",
  description:
    "The polar area chart represents the number of customers acquired through different channels.",
  labels: [
    "New Customers",
    "Repeat Customers",
    "Referrals",
    "Social Media Leads",
  ],
  datasets: [
    {
      label: "Customer Acquisition",
      data: [30, 150, 300, 60],
      backgroundColor: ["#6936f5", "#30A9DE", "#F2994A", "#34A853"],
    },
  ],
};
