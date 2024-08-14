const DataTable = ({ tableData, pagination, setPagination }) => {
  const handlePevious = () => {
    setPagination((prev) => (prev > 1 ? prev - 1 : prev));
  };
  const handleNext = () => {
    setPagination((prev) =>
      prev < Math.floor(tableData.length / 10) ? prev + 1 : prev
    );
  };
  return (
    <div className="w-[90%] bg-primary overflow-x-auto space-y-3 p-2">
      <table className="w-full border-collapse">
        <thead className="w-full">
          <tr>
            <th className="w-[10%] border-2 border-slate-500">ID</th>
            <th className="w-[20%] border-2 border-slate-500">Title</th>
            <th className="w-[30%] border-2 border-slate-500">Description</th>
            <th className="w-[10%] border-2 border-slate-500">Price</th>
            <th className="w-[10%] border-2 border-slate-500">Category</th>
            <th className="w-[10%] border-2 border-slate-500">Sold</th>
            <th className="w-[10%] border-2 border-slate-500">Image</th>
          </tr>
        </thead>
        <tbody>
          {tableData
            .slice((pagination - 1) * 10, (pagination - 1) * 10 + 10)
            .map((item) => (
              <tr key={item.id}>
                <td className="border-2 border-slate-500 pl-2">{item.id}</td>
                <td className="border-2 border-slate-500 pl-2">{item.title}</td>
                <td className="border-2 border-slate-500 pl-2">
                  {item.description}
                </td>
                <td className="border-2 border-slate-500 pl-2">{item.price}</td>
                <td className="border-2 border-slate-500 pl-2">
                  {item.category}
                </td>
                <td className="border-2 border-slate-500 pl-2">
                  {item.sold ? "Sold" : "Unsold   "}
                </td>
                <td className="border-2 border-slate-500 pl-2">
                  <img src={item.image} alt="itemImage" className="back" />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="flex justify-between">
        <p>Page No: {pagination}</p>
        <div className="space-x-2">
          <button
            type="button"
            onClick={handlePevious}
            className="bg-red-300 px-2 py-1 rounded text-white"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="bg-red-300 px-2 py-1 rounded text-white"
          >
            Next
          </button>
        </div>
        <p>Per Page: {10}</p>
      </div>
    </div>
  );
};

export default DataTable;
