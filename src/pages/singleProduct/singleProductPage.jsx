import CourseContentCard from "../../components/cards/CourseContents";
import RelatedTopic from "../../components/cards/RelatedTopicCard";
import WhatToLearn from "../../components/cards/WhatToLearn";
import AppSubmitButton from "../../components/form/AppSubmitButton";
import CustomFormik from "../../components/form/CustomFormik";
import { aboutComponent, whatToLearn } from "../../utils/dataArr";
import { relatedTopics } from "../../utils/dataArr";
import { singleCourseContent } from "../../utils/dataArr";
import { useState } from "react";
import * as MaIcons from "react-icons/md";
import * as IaIcons from "react-icons/io";
import AboutOfferComponent from "../../components/about/AboutOffers";
import { fetchSingleCourseDetails } from "../../api";

const SingleProductPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { data, loading, mutate } = fetchSingleCourseDetails();
  console.log(data);

  //  const {id} = useParams()

  return (
    <div className="w-screen">
      <div className="w-full flex flex-col mt-36">
        <div className="w-full bg-black text-white">
          <div className="w-[80%] p-20 flex flex-col gap-3 justify-center text-start">
            <h2 className="font-bold text-4xl">{console.log(data?.data)}</h2>
            <p>
              The Ultimate Artificial Intelligence & Machine Learning course for
              CxOs, Managers, Team Leaders and Entrepreneurs
            </p>
            <span>Last updated 7/2025</span>
          </div>
        </div>
        <div className="w-full mt-5 flex justify-center">
          <div className="w-[90%] p-20 grid grid-cols-3 gap-4  justify-center ">
            <div className="w-full flex flex-col col-span-2 gap-2">
              <div className="border border-[hsl(236,19%,85%)] p-2">
                <div className="text-2xl font-bold ml-6 p-3">
                  What you'll learn
                </div>
                <div className="px-3 py-1 grid grid-cols-2 gap-3 w-full ">
                  {whatToLearn.map((item, i) => {
                    return (
                      <div key={i} className="w-full">
                        <WhatToLearn contents={item.content} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full mt-10">
                <h3 className="text-2xl font-semibold">
                  Explore related topics
                </h3>
                <div className="w-full flex gap-3">
                  {relatedTopics.map((content, i) => {
                    return (
                      <div key={i}>
                        <RelatedTopic topic={content.topic} />
                      </div>
                    );
                  })}
                </div>
                <div className="mt-5 w-full flex flex-col">
                  <h3 className="text-2xl font-medium">Course Contents</h3>
                  <span className="mt-5">8 Lecture Sections</span>
                  <div className="border border-[rgb(209,210,224)] w-full mt-3">
                    {singleCourseContent.map((item, i) => {
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
              <div className="mt-3 w-full">
                <h3 className="text-xl font-bold mb-2">Requirements</h3>
                <ul className="flex flex-col gap-2 list-disc w-full px-4 text-sm">
                  <li>
                    A basic understanding of Salesforce and Salesforce
                    Development is ideal. You should ideally know how to setup a
                    free Salesforce development org, and what an IDE (Integrated
                    Development Environment) is and how to set one up. However
                    if you are unfamiliar with how to setup an IDE for
                    Salesforce there are linked tutorials in the notes for this
                    course that will get you up to speed!
                  </li>
                  <li>
                    A basic understanding of Salesforce Administration is ideal,
                    however there are tutorials in the notes for this course
                    that will easily get you up to speed on the admin
                    information you need to know if you're brand new to
                    Salesforce.
                  </li>
                </ul>
              </div>
              <div className="mt-3 w-full">
                <h3 className="text-xl font-bold mb-2">Description</h3>
                <div className="text-sm">
                  In this course, Matt Gerry, founder of Coding With The Force,
                  with 10+ years of experience on the Salesforce platform, who
                  is also one of only ~500 Salesforce Certified Technical
                  Architects Worldwide, teaches students everything they need to
                  know to be as efficient and effective as possible when
                  utilizing AI powered IDE's and IDE plugins on the Salesforce
                  platform.Whether you are a beginner, intermediate, or advanced
                  Salesforce developer, this course will have something for you!{" "}
                  <br /> <br />
                  Throughout this course we'll go over absolutely everything
                  related to AI code assistants and how to leverage them to
                  speed up your Salesforce development. We'll start by going
                  over the basics of what AI, LLM's, and Agents
                </div>
              </div>
            </div>
            <div className="col-span-1 border border-[rgb(209,210,224)] h-[550px] p-2 flex flex-col">
              <div className="w-full mb-8 ">
                <img
                  className="w-full"
                  src="/images/soft-health-skills.jpg"
                  alt=""
                />
              </div>
              <p className="text-xl font-semibold px-5 ">#10,900</p>
              <div className="w-full mt-3 px-5 ">
                <CustomFormik>
                  <div className="w-full h-[55px]">
                    <AppSubmitButton title="BUY NOW" />
                  </div>
                </CustomFormik>
              </div>
              <div className="flex flex-col gap-3 mt-5 px-5 ">
                <h3 className="font-bold text-[16px]">This course includes:</h3>
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
    </div>
  );
};
export default SingleProductPage;
