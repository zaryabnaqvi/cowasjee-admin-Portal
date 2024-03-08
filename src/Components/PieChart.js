// PieChart.js

import React from 'react';
import Chart from 'react-apexcharts';
import {
 
    Typography,
    Card,
    CardBody,
   
  } from "@material-tailwind/react";

const PieChart = ({ data ,details}) => {
  // Extracting years and counting occurrences
  const yearCounts = data.reduce((acc, curr) => {
    const year = curr.year;
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  // Converting data to format accepted by ApexCharts
  const chartData = Object.entries(yearCounts).map(([year, count]) => (count));
console.log(chartData)
  // ApexCharts options
  const options = {
    labels: Object.keys(yearCounts),
  };

  return (
    <Card>
    <CardBody className="px-2 pb-0 ">
    <Typography
          variant="h5"
          className="ml-4 self-center sm:self-start font-semibold text-[#323226] "
        >
          {details}
        </Typography>
    <Chart
      options={options}
      series={chartData}
      type="pie"
      width="500"
    />
    </CardBody>
    </Card>
  );
};

export default PieChart;
