import React, { useEffect } from "react";
import { css } from "@emotion/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
  Filler
);
import { Bar } from "react-chartjs-2";

type Props = {
  ratingCount: number[];
};

const labels = ["5점", "4점", "3점", "2점", "1점"];
const data = (rating: number[]) => {
  return {
    labels: labels,
    datasets: [
      {
        data: rating,
        borderWidth: 2,
        backgroundColor: "#1CE65F",
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        barThickness: 10,
      },
    ],
  };
};

const RatingChart = ({ ratingCount }: Props) => {
  return (
    <div
      css={css`
        width: 200px;
      `}
    >
      <Bar
        data={data(ratingCount)}
        width={400}
        height={200}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default RatingChart;
