import { GrCheckmark } from "react-icons/gr";
const CourseAudience = ({ contents }) => {
  return (
    <div className="w-full p-1 flex gap-2 justify-center">
      <GrCheckmark className="mt-0.5 w-5" />
      <div className="text-sm font-thin">{contents}</div>
    </div>
  );
};
export default CourseAudience;
