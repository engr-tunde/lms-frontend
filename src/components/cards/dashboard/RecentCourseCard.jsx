const RecentCourseCard = ({
  courseStatus,
}) => {
  return (
    <div className="p-3 bg-white rounded-md border-[1.5px] border-[#E6E7EB]">
      <div className="flex w-full flex-col gap-4 text-[14px] font-normal text-[rgb(17,24,39)]">
        <div className="w-full flex justify-between items-center">
          <p className="rounded-md bg-[rgb(236,253,245)] border border-[rgb(167,243,208)] text-[rgb(56,162,138)] text-xs px-3 py-1">
            {courseStatus?.payment_status}
          </p>
          <div className="flex flex-col gap-0.5">
            <span className="size-[3px] bg-[#9CA3AF] rounded-full"></span>
            <span className="size-[3px] bg-[#9CA3AF] rounded-full"></span>
            <span className="size-[3px] bg-[#9CA3AF] rounded-full"></span>
          </div>
        </div>
        <div className="text-[18px] font-semibold">{courseStatus?.course_title}</div>
        <p>Ref: {courseStatus?.payment_reference}</p>
        <p>Date: {courseStatus?.created_at}</p>
        <p>
          {courseStatus?.currency} : <span>{courseStatus?.total_paid}</span>{" "}
        </p>
        <div className="w-full border border-[rgb(209,213,219)] cursor-pointer roundeed-md flex justify-center items-center p-3 text-sm text-[rgb(55,65,81)]">
          View details
        </div>
      </div>
    </div>
  );
};
export default RecentCourseCard;
