const DashboardCouseStatus = (item, i) => {
    return (
        <tr
        key={i}
      className={`text-xs text-custom-text border-t-gray-200 border-t hover:bg-[#f8f9fa] cursor-pointer text-[14px] ${
        i % 2 === 0 ? "bg-white" : null
      }`}
      >
            <td>{item?.course}</td>
            <td>{item?.status}</td>
        </tr>
    )
}
export default DashboardCouseStatus;