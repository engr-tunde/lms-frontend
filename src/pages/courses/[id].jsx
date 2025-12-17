import CourseContentCard from "../../components/cards/CourseContents";
import RelatedTopic from "../../components/cards/RelatedTopicCard";
import AppSubmitButton from "../../components/form/AppSubmitButton";
import CustomFormik from "../../components/form/CustomFormik";
import { aboutComponent } from "../../utils/dataArr";
import { relatedTopics } from "../../utils/dataArr";
import { useEffect, useState } from "react";
import * as MaIcons from "react-icons/md";
import * as IaIcons from "react-icons/io";
import AboutOfferComponent from "../../components/about/AboutOffers";
import { fetchSingleCourseDetails } from "../../api";
import { useParams } from "react-router-dom";
import {
  currencyFormatter,
  errorMessage,
  successMessage,
} from "../../utils/helper";
import CourseAudience from "../../components/cards/CourseAudience";

const SingleProductPage = () => {
  const { id } = useParams();

  const [openIndex, setOpenIndex] = useState(null);
  const [courseData, setcourseData] = useState();
  const { data, loading, mutate } = fetchSingleCourseDetails(id);

  mutate();
  useEffect(() => {
    if (data) {
      let dataObj = data?.data;
      setcourseData(dataObj);
    }
  }, [data]);

  console.log("courseData", courseData);

  // Ensure the user is logged in before being able to call this function. Otherwise, take the user to the login page, and return the user here afterwards.

  const handleOrder = async () => {
    const payload = {
      total_paid: courseData?.total_price,
      payment_reference: "Ref5453566273h",
    };
    const response = await orderForCourse(id);
    if (response?.status === 200) {
      successMessage(response?.data?.message);
      history("/dashboard/courses");
    } else {
      errorMessage(response?.data?.error);
    }
  };

  return (
    <div className="w-screen min-h-screen">
      {courseData ? (
        <div className="w-full flex flex-col mt-36">
          <div className="w-full bg-black text-white">
            <div className="w-[80%] p-20 flex flex-col gap-3 justify-center text-start">
              <h2 className="font-bold text-4xl">{courseData?.title}</h2>
              <p>{courseData?.what_to_taught}</p>
              {/* <span>Last updated 7/2025</span> */}
              <div className="w-max p-1 px-2 text-center border border-[rgb(145,148,172)] rounded-sm font-semibold text-sm">
                Level: {courseData?.level}
              </div>
            </div>
          </div>
          <div className="w-full mt-5 flex justify-center">
            <div className="w-full container p-20 grid grid-cols-3 gap-4  justify-center ">
              <div className="w-full flex flex-col col-span-3 lg:col-span-2 gap-2">
                <div className="border border-[hsl(236,19%,85%)] p-2">
                  <div className="text-2xl font-medium ml-6 p-3">
                    {/* What you'll learn */}
                    Course is meant for
                  </div>
                  <div className="px-3 py-1 grid grid-cols-2 gap-3 w-full ">
                    {courseData?.audience.map((item, i) => {
                      return (
                        <div key={i} className="w-full">
                          <CourseAudience contents={item} />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="col-span-1 border border-[rgb(209,210,224)] p-2 flex lg:hidden flex-col">
                  <div className="w-full mb-8 ">
                    <img
                      className="w-full"
                      src="/images/soft-health-skills.jpg"
                      alt=""
                    />
                  </div>
                  <p className="text-xl font-semibold px-5 ">
                    {currencyFormatter(courseData?.total_price)}
                  </p>
                  <div className="w-full mt-3 px-5 ">
                    <div
                      className="w-full py-5 primary-btn p-2 h-full"
                      onClick={handleOrder}
                    >
                      BUY NOW
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-8 px-5 ">
                    <h3 className="font-medium text-[16px]">
                      This course includes:
                    </h3>
                    <div className="flex flex-col gap-2 text-sm">
                      {aboutComponent.map((item, i) => {
                        const icon = MaIcons[item.icon];
                        const icon2 = IaIcons[item.icon];
                        return (
                          <div key={i}>
                            <AboutOfferComponent
                              Icon={icon ? icon : icon2}
                              value={item.value}
                            />
                          </div>
                          //    <AboutOfferComponent Icon={icon ? icon : icon2 }/>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full mt-10">
                  <div className="mt-5 w-full flex flex-col">
                    <h3 className="text-2xl font-medium">Course Contents</h3>
                    <span className="mt-5">
                      {courseData?.course_content?.length} Lecture Sections
                    </span>
                    <div className="border border-[rgb(209,210,224)] w-full mt-3">
                      {courseData?.course_content.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                          <div
                            className="w-full"
                            key={i}
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                          >
                            <CourseContentCard
                              title={item.title}
                              objectives={item.objective}
                              isOpen={isOpen}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="mt-6 w-full">
                  <h3 className="text-xl font-medium mb-2">Requirements</h3>
                  <ul className="flex flex-col gap-2 list-disc w-full px-4 text-sm">
                    {courseData?.requirements?.map((item, i) => (
                      <li key={i} className="font-thin">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 w-full">
                  <h3 className="text-xl font-medium mb-2">Description</h3>
                  <div className="text-sm font-thin">
                    {courseData?.description}
                  </div>
                </div>
              </div>
              <div className="hidden col-span-1 border border-[rgb(209,210,224)] h-[550px] p-2 lg:flex flex-col">
                <div className="w-full mb-8 ">
                  <img
                    className="w-full"
                    src="/images/soft-health-skills.jpg"
                    alt=""
                  />
                </div>
                <p className="text-xl font-semibold px-5 ">
                  {currencyFormatter(courseData?.total_price)}
                </p>
                <div className="w-full mt-3 px-5 ">
                  <div
                    className="w-full py-4 primary-btn p-2 h-full text-center"
                    onClick={handleOrder}
                  >
                    BUY NOW
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-7 px-5 ">
                  <h3 className="font-medium text-[16px]">
                    This course includes:
                  </h3>
                  <div className="flex flex-col gap-2 text-sm">
                    {aboutComponent.map((item, i) => {
                      const icon = MaIcons[item.icon];
                      const icon2 = IaIcons[item.icon];
                      return (
                        <div key={i}>
                          <AboutOfferComponent
                            Icon={icon ? icon : icon2}
                            value={item.value}
                          />
                        </div>
                        //    <AboutOfferComponent Icon={icon ? icon : icon2 }/>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : loading ? (
        <div>Loading...</div>
      ) : null}
    </div>
  );
};
export default SingleProductPage;
