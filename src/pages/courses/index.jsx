import { Link } from "react-router-dom";
import { fetchAllCourses } from "../../api";
import CourseCard from "../../components/cards/CourseCard";
import { useEffect, useState } from "react";

const CoursePage = () => {
  const [courseData, setcourseData] = useState();
  const { data, loading, mutate } = fetchAllCourses();
  mutate();
  useEffect(() => {
    if (data) {
      let dataArr = data?.data;
      setcourseData(dataArr);
    }
  }, [data]);

  return (
    <div className="w-screen min-h-screen">
      {courseData ? (
        <div className="w-full flex flex-col gap-3 p-10">
          {/* <div className="mt-28 flex gap-3 items-center">

                    </div>
                </div> */}
          <h2 className="mt-16 text-3xl text-custom-title font-bold px-1">
            What to learn next...
          </h2>
          <div className="flex flex-col gap-2 mt-4">
            <h3 className="text-2xl text-custom-text font-bold px-1">
              Recomend for you
            </h3>
            <div className="grid grid-cols-4 gap-3 w-full py-2 mt-1">
              {data?.data.map((course, i) => (
                <Link to={`/courses/${course.course_id}`} key={i}>
                  <CourseCard course={course} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : loading ? (
        <div>Loading....</div>
      ) : null}
    </div>
  );
};
export default CoursePage;
