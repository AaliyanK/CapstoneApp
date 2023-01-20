import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";

const Graph = ({ graphData }) => {
  const [chartObject, setChartObject] = useState({
    options: {
      chart: {
        id: "realtime",
        height: 350,
        type: "line",
        animations: {
          enabled: true,
          easing: "linear",
          dynamicAnimation: {
            speed: 1000,
          },
        },
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Dynamic Updating Chart",
        align: "left",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
      yaxis: {
        max: 100,
      },
      legend: {
        show: false,
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  return (
    <div>
      {/* <Chart
        options={chartObject.options}
        series={chartObject.series}
        type={"line"}
        width="500"
      /> */}
      <Chart
        type="line"
        height={350}
        width={500}
        series={[
          {
            name: "Air Temperature",
            data: graphData?.map((data) => data[2]),
          },
        ]}
        options={{
          chart: {
            animations: {
              enabled: true,
              easing: "linear",
              dynamicAnimation: {
                speed: 1000,
              },
            },
            toolbar: {
              show: true,
            },
            zoom: {
              enabled: true,
            },
          },
          title: {
            text: "Dynamic Updating Chart",
            align: "left",
          },
          stroke: { width: 1, curve: "smooth" },
          dataLabels: { enabled: false },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            categories: graphData?.map((data) => data[1]),
          },
          yaxis: {
            show: true,
          },
        }}
      />
    </div>
  );
};

export default Graph;
