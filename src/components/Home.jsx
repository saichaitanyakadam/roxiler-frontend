import React, { useCallback, useEffect, useState } from "react";
import DataTable from "./DataTable";
import Statistics from "./Statistics";
import axios from "axios";
import BarChart from "./BarChart";
import PieChart from "./PieChart.jsx";
import useDebounce from "../hooks/useDebounce.jsx";

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
  const debounceValue = useDebounce(search);

  const [month, setMonth] = useState(3);
  const [pagination, setPagination] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [statsData, setStatsData] = useState({});
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

  const getData = useCallback(async () => {
    const { data } = await axios.get(
      `http://localhost:4500/api/combined-data?month=${month}`
    );
    setStatsData(data.statsData[0]);
    setBarChartData(data.barChartData);
    setPieChartData(data.pieChartData);
  }, [month]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `http://localhost:4500/api/get-data?month=${month}&pagination=${pagination}&search=${debounceValue}`
      );
      setTableData(data);
    };
    getData();
  }, [month, debounceValue, pagination]);

  return (
    <div className="min-h-screen bg-sky-100 flex flex-col items-center p-10 gap-4 overflow-x-hidden">
      <div className="h-[200px] w-[200px] rounded-[50%] bg-white flex justify-center items-center">
        <h1 className="text-3xl font-bold ml-4">Transaction Dashboard</h1>
      </div>
      <div className="flex w-[90%] lg:w-[60%] justify-between">
        <div className="bg-primary rounded-2xl h-[40px] w-[50%] lg:w-[25%]">
          <input
            placeholder="Search transaction"
            type="text"
            className="placeholder-gray-700 placeholder:font-semibold bg-transparent w-full outline-none px-5 h-full"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        <div className="bg-primary rounded-2xl h-[40px] w-[40%] lg:w-[20%]">
          <select
            className="w-full bg-transparent h-full pl-5 font-semibold text-gray-700 outline-none"
            value={month}
            onChange={(event) => {
              setMonth(event.target.value);
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
      <DataTable
        tableData={tableData}
        pagination={pagination}
        setPagination={setPagination}
      />
      <Statistics month={months[month]} stats={statsData} />
      <BarChart barChartData={barChartData} />
      <PieChart pieChartData={pieChartData} />
    </div>
  );
};

export default Home;
