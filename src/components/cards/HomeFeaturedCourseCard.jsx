import { ImArrowUpRight2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

const HomeFeaturedCourseCard = ({
  people,
  title,
  details,
  image,
  name,
  position,
  action,
  normal,
  img,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="relative">
      <div
        className={`w-full bg-[url("/images/health_10.jpg")] h-[400px] bg-no-repeat bg-cover bg-center justify-end items-center flex gap-2 flex-col p-3 text-black rounded-lg`}
      >
        <div className="bg-white w-[95%] rounded-md">
          <div className="flex flex-col p-3">
            <div className="flex text-sm text-[rgb(169,115,151)] gap-1 border p-0.5 border-[rgb(209,210,224)] rounded-md text-start w-max items-center">
              <MdOutlinePeopleAlt />
              <span className="">{people}</span>
            </div>
            <div className="text-start text-[rgb(42,83,168)] text-lg mt-2">
              {title}
            </div>
            <div className="flex justify-end text-[rgb(95,96,111)] mt-4">
              <FiArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeFeaturedCourseCard;
