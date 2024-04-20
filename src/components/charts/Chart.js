import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Bar, Pie, PolarArea } from "react-chartjs-2";

export const lineOptions = {
  scales: {
    x: {
      type: "category",
    },
  },
};

export const barOptions = {
  scales: {
    x: {
      type: "category",
    },
  },
};

export const pieOptions = {};

export const polarAreaOptions = {
  scales: {
    r: {
      type: "radialLinear",
    },
  },
};

const Chart = ({ type, data, options }) => {
  switch (type) {
    case "line":
      return <Line data={data} options={lineOptions} />;
    case "bar":
      return <Bar data={data} options={barOptions} />;
    case "pie":
      return <Pie data={data} options={pieOptions} />;
    case "polarArea":
      return <PolarArea data={data} options={polarAreaOptions} />;
    default:
      return null;
  }
};

export default Chart;
