import React from 'react';
import Chart from "react-google-charts";

const data = [
  ["Color", "New Color"],
  [0, 0],
  [1, 3],
  [2, 4],
  [3, 2],
  [4, 1]
];

const options = {
  legend: "none"
};

const LinearChart = () => {
  return (
        <Chart
          chartType="LineChart"
          width="500px"
          height="500px"
          data={data}
          options={options}
        />
  );
}

export default LinearChart;