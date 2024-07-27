// LineGraph.js

import React from 'react';
import Chart from 'react-apexcharts';

import {
 
    Typography,
    Card,
    CardBody,
   
  } from "@material-tailwind/react";

const LineGraph = ({ data,details }) => {
  // Extracting dates and counting occurrences
  const dateCounts = data.reduce((acc, curr) => {
    const date = `${curr.issueDate.year}-${curr.issueDate.month}-${curr.issueDate.day}`;
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  // Converting data to format accepted by ApexCharts
  const chartData = Object.entries(dateCounts).map(([date, count]) => ({
    x: new Date(date).getTime(),
    y: count
  }));
console.log(chartData)
  // ApexCharts options
  const options = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    colors: ["#FF0000"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    xaxis: {
      type: 'datetime'
    },
    title: {
      text: ''
    },
    yaxis: {
      title: {
        text: 'Number of Notifications'
      }
    }
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
      series={[{ data: chartData }]}
      type="line"
      
      height={300}
    
    />
    </CardBody>
    </Card>
  );
};

export default LineGraph;