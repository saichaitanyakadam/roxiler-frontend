import React from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const PieChartView = React.memo(({ pieChartData }) => {
  const data = pieChartData.map((element) => ({
    total: element.total,
    name: element._id,
  }));

  return (
    <div className="w-full h-[40vh] flex flex-col items-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="total"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <h2 className="text-xl font-semibold">Categories Pie Chart</h2>
    </div>
  );
});

export default PieChartView;
