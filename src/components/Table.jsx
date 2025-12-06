const Table = ({
  tableColumn,
  rowData,
  rowTemplate,
  view,
}) => {
  return (
    <table className="overflow-x-auto w-full h-[300px] p-3 ">
      <thead
        className={
          view
            ? "bg-white mb-3 text-gray-700 text-center w-full border-collapse border border-[rgb(228,230,252)]"
            : " mb-3 text-gray-700 w-full border-collapse border-b border-gray-700"
        }
      >
        <tr className="">
          {tableColumn?.map((item, i) => (
            <th
              key={i}
              className={` ${item.className} text-start  text-[13px]`}
            >
              <div className="">{item.title}</div>
              {/* <div className="">{item.itemStatus}</div> */}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="mt-20 overflow-y-scroll">
        {rowData?.map((item, i) =>
          rowTemplate(item, i)
        )}
      </tbody>
    </table>
  );
};

export default Table;
