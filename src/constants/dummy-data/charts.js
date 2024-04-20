/* export const lineChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "#7a4df8", // Lighter purple
      tension: 0.1,
    },
  ],
};

export const barChartData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Quantity",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "#6936f5",
        "#5930d4",
        "#7a4df8",
        "#8a65fb",
        "#dec0fe",
        "#c8a8fd",
      ],
    },
  ],
};

export const pieChartData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#7a4df8", "#5930d4", "#dec0fe"],
    },
  ],
};

export const polarAreaChartData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
  datasets: [
    {
      label: "My dataset",
      data: [11, 16, 7, 3, 14],
      backgroundColor: ["#7a4df8", "#5930d4", "#dec0fe", "#c8a8fd", "#8a65fb"],
    },
  ],
}; */

export const lineChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Monthly Sales ($)",
      data: [12000, 19000, 17000, 22000, 15000, 21000, 24000],
      fill: false,
      borderColor: "#4285F4", // Complementary Blue
      tension: 0.1,
    },
  ],
};

export const barChartData = {
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
        "#6936f5", //
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
