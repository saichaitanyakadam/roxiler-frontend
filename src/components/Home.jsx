import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";
import Statistics from "./Statistics";
import axios from "axios";
import BarChart from "./BarChart";
import PieChart from "./PieChart.jsx";

const months = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

const Home = () => {
  const [search, setSearch] = useState("");
  const [month, setMonth] = useState(3);
  const [pagination, setPagination] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [stats, setStats] = useState({});
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const getData = async () => {
    const tableData = await axios.get(
      `http://localhost:4500/api/get-data?pagination=${pagination}&search=${search}&month=${month}`
    );
    setTableData(tableData.data);
    const statsResponse = await axios.get(
      `http://localhost:4500/api/get-stats?month=${month}`
    );
    setStats(statsResponse.data[0]);
    const barChartResponse = await axios.get(
      `http://localhost:4500/api/get-barchart-data?month=${month}`
    );
    setBarChartData(barChartResponse.data);
    const pieChartResponse = await axios.get(
      `http://localhost:4500/api/get-categories?month=${month}`
    );
    setPieChartData(pieChartResponse.data);
  };

  useEffect(() => {
    getData();
  }, [month]);

  return (
    <div className="min-h-screen bg-sky-100 flex flex-col items-center p-5 gap-4 overflow-x-hidden">
      <div className="h-[200px] w-[200px] rounded-[50%] bg-white flex justify-center items-center">
        <h1 className="text-3xl font-bold ml-4">Transaction Dashboard</h1>
      </div>
      <div className="flex w-[90%] lg:w-[60%] justify-between">
        <div className="bg-yellow-300 rounded-2xl h-[40px] w-[50%] lg:w-[20%]">
          <input
            placeholder="Search transaction"
            type="text"
            className="placeholder-gray-700 placeholder:font-semibold bg-transparent w-full outline-none pl-5 h-full"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            onBlur={() => {
              getData();
            }}
          />
        </div>
        <div className="bg-yellow-300 rounded-2xl h-[40px] w-[40%] lg:w-[20%]">
          <select
            className="w-full bg-transparent h-full pl-5 font-semibold text-gray-700 outline-none"
            value={month}
            onChange={(event) => {
              setMonth(event.target.value);
              getData();
            }}
          >
            <option value={1}>Jan</option>
            <option value={2}>Feb</option>
            <option value={3}>Mar</option>
            <option value={4}>Apr</option>
            <option value={5}>May</option>
            <option value={6}>Jun</option>
            <option value={7}>Jul</option>
            <option value={8}>Aug</option>
            <option value={9}>Sep</option>
            <option value={10}>Oct</option>
            <option value={11}>Nov</option>
            <option value={12}>Dec</option>
          </select>
        </div>
      </div>
      <DataTable tableData={tableData} />
      <Statistics month={months[month]} stats={stats} />
      <BarChart barChartData={barChartData} />
      <hr className="border-2 border-gray-500 w-full my-2" />
      <PieChart pieChartData={pieChartData} />
    </div>
  );
};

export default Home;
