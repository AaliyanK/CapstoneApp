import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";

const Graph = ({ graphData }) => {
  useEffect(() => {
    const chart = ApexCharts.getChartByID("mainChart");
    chart.hideSeries("Air Temperature");
    chart.hideSeries("Inlet Temperature");
    chart.hideSeries("Flow Meter");
    chart.hideSeries("Current_1");
    chart.hideSeries("Current_2");
    chart.hideSeries("Current_3");
    chart.hideSeries("Total Flowrate");
    chart.hideSeries("Moving Average");
    chart.hideSeries("Growth State");
  }, [graphData]);

  return (
    <div>
      <Chart
        type="line"
        height={650}
        width={900}
        series={[
          {
            name: "Cell Density",
            data: graphData?.map((data) => data[2]),
            // CHANGE THIS TO BE CELL DENSITY DATA, will change the data[2]
          },
          {
            name: "Air Temperature",
            data: graphData?.map((data) => data[2]),
          },
          {
            name: "Inlet Temperature",
            data: graphData?.map((data) => data[3]),
          },
          {
            name: "Flow Meter",
            data: graphData?.map((data) => data[4]),
          },
          {
            name: "Current_1",
            data: graphData?.map((data) => data[5]),
          },
          {
            name: "Current_2",
            data: graphData?.map((data) => data[6]),
          },
          {
            name: "Current_3",
            data: graphData?.map((data) => data[7]),
          },
          {
            name: "Total Flowrate",
            data: graphData?.map((data) => data[8]),
          },
          {
            name: "Moving Average",
            data: graphData?.map((data) => data[9]),
          },
          {
            name: "Growth State",
            data: graphData?.map((data) => data[10]),
          },
        ]}
        options={{
          chart: {
            id: "mainChart",
            animations: {
              enabled: true,
              easing: "linear",
              dynamicAnimation: {
                enabled: true,
                speed: 1000,
              },
            },
            toolbar: {
              show: true,
              export: {
                csv: {
                  headerCategory: "Time",
                },
              },
            },
            zoom: {
              enabled: true,
            },
          },
          title: {
            text: "Cell Density vs Time",
            align: "center",
          },
          stroke: { width: 1, curve: "smooth" },
          dataLabels: { enabled: false },
          xaxis: {
            categories: graphData?.map((data) => data[1]),
            title: {
              text: "Time",
            },
          },
          legend: {
            showForSingleSeries: true,
            show: true,
          },
          yaxis: {
            show: true,
            title: {
              text: "Cell Density",
            },
          },
        }}
      />
    </div>
  );
};

export default Graph;
