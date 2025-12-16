import { FaArrowRight } from "react-icons/fa";
const DashboardCard = ({ count, title, detail }) => {
  return (
    <div className="pt-4 px-4 pb-10 flex flex-col gap-3 bg-white rounded-lg border-[1.5px] border-[#E6E7EB]">
      <div className="flex px-2">
        <div className="flex flex-col gap-2 ">
          <span className="text-[14px] font-light text-[#6B7280]">{title}</span>
          <div className="text-[30px] font-semibold">{count}</div>
        </div>
        {/* <span className={FaIconComponent ? "text-[rgb(139,139,139)] size-[35px] flex items-center justify-center rounded-full" : null}>
                    {FaIconComponent}
          </span>
          <span className={IoIconComponent ? "text-[rgb(139,139,139)] size-[35px] flex items-center justify-center rounded-full" : null}>
                    {IoIconComponent}
            </span> */}
      </div>
    </div>
  );
};
export default DashboardCard;
