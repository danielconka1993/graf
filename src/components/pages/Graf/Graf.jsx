import React from "react";
import Chart from "react-apexcharts";

const Graf = ({ data1, data2 }) => {
  return (
    <>
      <Chart
        type="line"
        width="100%"
        height="100%"
        series={[
          { name: "data1", data: data1 },
          { name: "data2", data: data2 },
        ]}
        options={{
          title: { text: "line_Graf" },
          xaxis: {
            title: { text: "8 čísel" },
            categories: [1, 2, 3, 4, 5, 6, 7, 8],
          },
          yaxis: { title: { text: "0 - 100" } },
        }}
      />
    </>
  );
};

export default Graf;
