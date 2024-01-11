const Statistics = ({ month, stats }) => {
  return (
    <div className="w-[70%] lg:w-[20%]">
      <h2 className="text-2xl font-semibold p-4">Statistics - {month}</h2>
      <div className="w-full bg-yellow-200 p-4 rounded-2xl font-semibold">
        <div className="flex">
          <p className="w-[60%]">Total Sale</p>
          <span>{stats.totalPrice}</span>
        </div>
        <div className="flex">
          <p className="w-[60%]">Total sold item</p>
          <span>{stats.totalSold}</span>
        </div>
        <div className="flex">
          <p className="w-[60%]">Total not sold item</p>
          <span>{stats.totalUnSold}</span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
