import { FaArrowRight } from "react-icons/fa";
const DashboardCard = ({count, title, detail, FaIconComponent, IoIconComponent}) => {
    return (
      <div className="pt-2 pb-0 flex flex-col gap-3 h-[150px] bg-white shadow-[1px_1px_3px_1px_#000c0275] rounded-lg border border-[rgb(229,231,235)]">
        <div className="flex px-2">
          <div className="flex flex-col gap-2">
            <span>{count}</span>
            <div>{title}</div>
          </div>
          <span className={FaIconComponent ? "text-[rgb(139,139,139)] size-[35px] flex items-center justify-center rounded-full" : null}>
                    {FaIconComponent}
          </span>
          <span className={IoIconComponent ? "text-[rgb(139,139,139)] size-[35px] flex items-center justify-center rounded-full" : null}>
                    {IoIconComponent}
            </span>
        </div>
        <div className="flex gap-2 items-center mt-8 justify-center w-full bg-[rgb(243,244,246)]">
            <div>{detail}</div>
            <FaArrowRight />
        </div>
    </div>
    )
}
export default DashboardCard;