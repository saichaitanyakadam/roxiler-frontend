import React from "react";
import {
  ResponsiveContainer,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Rectangle,
} from "recharts";

const BarChartView = React.memo(({ barChartData }) => {
  return (
    <div className="w-full h-[40vh] lg:h-[60vh] flex flex-col items-center justify-center">
      <ResponsiveContainer width="80%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={barChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="_id" />
          <YAxis />
          <Legend />
          <Bar
            dataKey="count"
            fill="#6ce5e8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
      <h2 className="text-xl font-semibold">Price Bar Chart</h2>
    </div>
  );
});

export default BarChartView;
