import React from "react";

const DataTable = ({ tableData }) => {
  return (
    <div className="w-[90%] bg-yellow-300 overflow-x-auto">
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
          {tableData.map((item) => (
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
                <img src={item.image} alt="itemImage" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
