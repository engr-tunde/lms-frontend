import Slide from "../../components/cards/Slides";
// import Button from "../../component/global/Button";
import OurOffers from "../../components/uniqueContent/OurOffer";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import {
  courseContent,
  briefContent,
  slides,
  feedback,
} from "../../utils/dataArr";
import { Link, useNavigate } from "react-router-dom";
import CourseCard from "../../components/cards/CourseCard";
import FeedBackCard from "../../components/cards/FeedBackCard";
import { fetchAllCourses } from "../../api";
import HomeFeaturedCourseCard from "../../components/cards/HomeFeaturedCourseCard";

const HomePage = () => {
  const { data, loading, mutate } = fetchAllCourses();

  const timerRef = useRef(null);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [feedBackIndex, setFeedBackIndex] = useState(0);

  const gotoRes = (i) => {
    setFeedBackIndex(i);
  };

  const translateBy = currentSlideIndex * 1168;
  const secondtranslate = feedBackIndex * 1070;

  //  const [nextSlide, setNextSlide ] = useState()
  //  const [prevSlide, setPrevSlide ] = useState()

  // const eachSlide = slides.forEach((slide)=> {
  //     slide.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  // });
  //  const nextSlide = () => {
  //     setCurrentSlideIndex((prevIndex) => prevIndex ===  slides.length - 1 ? 0 : prevIndex + 1)
  //     console.log(currentSlideIndex)
  //  };
  //  const prevSlide = () => {
  //      setCurrentSlideIndex((prevIndex) => prevIndex ===  0 ? slides.length - 1  : prevIndex - 1)
  //  }

  const nextSlide = () => {
    const isLastSlide = currentSlideIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlideIndex + 1;
    setCurrentSlideIndex(newIndex);
    console.log(newIndex);
  };
  const prevSlide = () => {
    const isFirstSlide = currentSlideIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlideIndex - 1;
    setCurrentSlideIndex(newIndex);
    console.log(newIndex);

    const isFirstRes = feedBackIndex === 0;
    const newRes = isFirstRes ? feedback.length : currentSlideIndex - 1;
    setFeedBackIndex(newRes);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="w-screen flex flex-col">
      <div className="mt-[200px] mb-20 w-full z-10 px-7 lg:px-0">
        <div className="flex flex-col justify-center w-full items-center">
          {/* first section */}
          <p className="flex flex-col text-[100px] w-full lg:w-[85%] mx-auto leading-none font-bold justify-center">
            <span className="text-center">Your Gateway </span>
            <span className="text-start">To Health Skills </span>
            <span className="text-center">Proficiency</span>
          </p>
          {/* 2nd section */}
          <div className="w-[85%] mt-[50px]">
            <img
              src="/images/banner1.jpg"
              alt=""
              className="w-full h-[350px] rounded-md"
            />
          </div>
          {/* 3rd section */}
          <div className="justify-center w-[80%] mb-[100px]">
            <div className="flex mt-10 w-full  justify-between items-center text-[22px] font-normal">
              <div className="gap-5 flex">
                <div className="flex flex-col gap-8 item-center">
                  <p className="text-[20px] w-[550px]">
                    Unlock the world by mastering languages. We offers an
                    immersive, interactive, and personalized language learning.
                  </p>
                  <div className=" flex gap-32 items-center">
                    <div className="flex justify-center items-center text-white w-[200px] h-[55px] bg-primary-deep rounded-md">
                      Get in touch
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="border border-black size-[70px] rounded-full">
                        {/* <img src="" alt="" /> */}
                      </div>
                      <div className="text-[20px] font-medium">watch video</div>
                    </div>
                  </div>
                </div>
                <img src="/images/shape2.svg" alt="" className="w-[130px]" />
              </div>
              {/* <Button size="500px" title="Explore all courses"/> */}
              <Link
                to="/courses"
                className=" cursor-pointer p-3 flex justify-center text-center items-center size-[150px] text-2xl font-semibold rounded-full text-white bg-primary-deep"
              >
                Explore all courses
              </Link>
            </div>
          </div>

          {/* 4th section */}

          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-12 gap-5 ">
            <div
              className={`col-span-1 bg-center justify-center flex flex-col gap-2 p-3 text-black rounded-lg`}
            >
              <h3 className="text-[28px] font-medium text-custom-title leading-9">
                Learn essential career and life saving skills
              </h3>
              <p className="w-[270px] text-custom-text font-thin">
                Udemy helps you build in-demand skills fast and advance your
                career in a changing job market.
              </p>
            </div>
            {briefContent.map((content, i) => (
              <div className="col-span-1" key={i}>
                <HomeFeaturedCourseCard
                  people={content.people}
                  title={content.title}
                  img={content.img}
                />
              </div>
            ))}
          </div>

          {/* 5th section */}
          <div className="w-full py-20 grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-10">
            <div className="col-span-1 h-[480px]  ">
              <img
                src="/images/about1.jpg"
                alt=""
                className="rounded-md w-full h-full"
              />
            </div>
            <div className="col-span-1 w-full lg:w-[70%] flex flex-col justify-center gap-4 p-2">
              <h3 className="text-[28px] font-medium text-custom-title">
                Delving into Our Health Literacy Odysse
              </h3>
              <p className="text-[17px] font-normal text-custom-text">
                We are dedicated to fostering a vibrant community of language
                learners committed to linguistic proficiency and cultural
                appreciation. Established in 2002
              </p>
              <p className="text-[17px] font-thin">
                Our journey began with a vision to provide an immersive and
                comprehensive language education experience guided by.
              </p>
              <Link
                to="/register"
                className="cursor-pointer w-[150px] h-[50px] bg-primary-deep flex justify-center items-center rounded-md text-white"
              >
                Enroll Now
              </Link>
            </div>
          </div>

          {/* 7th section */}

          <div className="container pt-5 pb-5 lg:pb-20 flex flex-col gap-5">
            <div className="flex flex-row justify-between items-end w-full">
              <div className="w-full flex flex-col gap-1">
                <p className="text-[28px] font-medium w-[300px] leading-tight text-black ">
                  Our Popular Courses
                </p>
                <div className="text-[17px] font-thin">
                  From basic skills to advanced ones,{" "}
                  {import.meta.env.VITE_APP_NAME} helps in your health
                  profession development.
                </div>
              </div>

              <div className="w-max">
                <Link
                  to="/courses"
                  className="hidden md:inline-block w-max cursor-pointer text-[18px] underline"
                >
                  Explore all courses
                </Link>
              </div>
            </div>

            <div className="w-full justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5">
              {data?.data.slice(0, 4).map((course, i) => (
                <div className="col-span-1" key={i}>
                  <CourseCard
                    course={course}
                    title={course.title}
                    tag={course.category}
                    image={course.image}
                    discount={course.total_price}
                    price={course.price}
                  />
                </div>
              ))}
            </div>
            <Link
              to="/courses"
              className="ms-auto me-5 md:hidden cursor-pointer text-[18px] underline"
            >
              Explore all courses
            </Link>
          </div>

          {/* 8th section */}
          <div className="w-full py-20 grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-5">
            <div className="col-span-1 w-full lg:w-[70%] ms-auto flex flex-col justify-center gap-6 p-2">
              <h2 className="text-[28px] font-bold text-custom-text">
                Unraveling the Unique WHY US
              </h2>
              <OurOffers
                image="/images/expert.svg"
                title="Expert Faculty"
                details="Emphasize the qualifications and expertise of your instructors. Highlight their experience."
              />
              <OurOffers
                image="/images/small.svg"
                title="Expert Faculty"
                details="Emphasize the qualifications and expertise of your instructors. Highlight their experience."
              />
              <OurOffers
                image="/images/learning.svg"
                title="Expert Faculty"
                details="Emphasize the qualifications and expertise of your instructors. Highlight their experience."
              />
            </div>
            <div className="col-span-1 h-[480px]  ">
              <img
                src="/images/why-us1.jpg"
                alt=""
                className="rounded-md w-full h-full"
              />
            </div>
          </div>

          {/* 9th section */}
          <div className="container w-full pt-2.5 pb-[30px] flex flex-col justify-center items-center mt-10">
            <div className="flex flex-col items-center justify-start h-[500px]">
              <h2 className="text-[30px] lg:text-[40px] font-bold w-[60%] leading-tight text-center text-custom-title">
                Upcoming Courses These will be started soon
              </h2>
              <div className={`h-[360px] relative `}>
                <div className={`h-full w-[1180px] overflow-hidden`}>
                  <div
                    className={`flex gap-3 h-full transform ease-out duration-300 `}
                    style={{
                      width: `calc(280 * ${data?.data.length}px)`,
                      transform: `translateX(${-translateBy}px)`,
                    }}
                  >
                    {data?.data.map((content, i) => {
                      // console.log(currentSlideIndex);
                      // console.log(currentSlideIndex * 1024);
                      // const translate = currentSlideIndex * 826
                      return (
                        <div
                          className={`w-full h-full `}
                          key={i}
                          slides={content.id}
                        >
                          <Slide
                            titleA={content.title}
                            tagA={content.category}
                            discountA={content.discount}
                            priceA={content.price}
                            // titleB={content.titleB}  tagB={content.tagB} imageB={content.imageB} discountB={content.discountB} priceB={content.priceB}

                            // titleC={content.titleC}  tagC={content.tagC} imageC={content.imageC} discountC={content.discountC} priceC={content.priceC}

                            // titleD={content.titleD}  tagD={content.tagD} imageD={content.imageD} discountD={content.discountD} priceD={content.priceD}
                          />
                          {/* <Slide priceX={slide.priceX} titleX={slide.titleX}  
                                                        priceY={slide.priceY} titleY={slide.titleY} /> */}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex p-3 justify-center items-center w-full">
                  <div
                    className="absolute z-50 bg-white size-10 shadow-[1px_3px_8px_3px_#000c0275] rounded-full -left-3 top-[35%]  p-1 flex justify-center  items-center transform translate-x-0 translate-y-1/2 cursor-pointer"
                    onClick={prevSlide}
                  >
                    <FaChevronLeft />
                  </div>
                  <div
                    className="absolute z-50 bg-white size-10 shadow-[1px_3px_3px_3px_#000c0275] rounded-full -right-1.5 top-[35%]
                                            p-1 flex justify-center items-center transform translate-x-0 translate-y-1/2 cursor-pointer"
                    onClick={nextSlide}
                  >
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 10th section */}
          <div className="w-full pb-[50px] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center w-[90%]  gap-4">
              <h2 className="text-[40px] font-semibold">
                What our students say
              </h2>
              <div
                className={`h-[340px] relative 
                                    `}
              >
                <div className={`h-[95%] w-[1070px] overflow-hidden `}>
                  <div
                    className={`flex gap-3 h-full transform ease-out duration-300 `}
                    style={{
                      width: `calc(345 * ${feedback.length}px)`,
                      transform: `translateX(${-secondtranslate}px)`,
                    }}
                  >
                    {feedback.map((content, i) => {
                      // console.log(currentSlideIndex);
                      // console.log(currentSlideIndex * 1024);
                      useEffect(() => {
                        if (timerRef.current) {
                          clearTimeout(timerRef.current);
                        }
                        timerRef.current = setTimeout(() => {
                          gotoRes();
                        }, 2000);
                        return () => clearTimeout(timerRef.current);
                      }, [gotoRes]);
                      // const translate = currentSlideIndex * 826
                      return (
                        <div
                          className={`w-full h-full `}
                          key={i}
                          slides={content.id}
                        >
                          <FeedBackCard
                            courseA={content.courseA}
                            detailsA={content.detailsA}
                            picA={content.picA}
                            identityA={content.identityA}
                            titleA={content.titleA}
                            // courseB={content.courseB}  detailsB={content.detailsB} picB={content.picB} identityB={content.identityB} titleB={content.titleB}

                            // courseC={content.courseC}  detailsC={content.detailsC} identityC={content.identityC} picC={content.picC} titleC={content.titleB}
                          />
                          {/* <Slide priceX={slide.priceX} titleX={slide.titleX}  
                                                        priceY={slide.priceY} titleY={slide.titleY} /> */}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  {feedback?.slice(0, 3).map((item, i) => {
                    return (
                      <div
                        key={i}
                        className="text-7xl mx-3 cursor-pointer"
                        onClick={() => gotoRes(i)}
                      >
                        .
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <p className=" text-center w-[60%] text-[21px] font-medium">
                                "Learning at LOGO has been an enriching experience. The instructors are not only skilled but incredibly passionate about teaching. The immersive approach has significantly boosted my confidence in speaking the language."
                            </p>
                            <div className="flex flex-col justify-center items-center ] w-[90%]  gap-2">
                                <div className="border-2 border-black rounded-full size-[85px]"><img src="" alt="" /></div>
                                <h3 className="text-[22px] font-medium">Macky Q. Anderson</h3>
                                <p className="text-21">Web Desginer, Web Company</p>
                            </div> */}
            </div>
          </div>
          {/* 11th section */}
          {/* <div className="w-full ">
            <div className="flex justify-center items-center h-[460px]">
              <div className="flex  w-full h-full justify-center items-center ">
                <div className="flex flex-col gap-4 w-[50%] h-full justify-center items-start pl-20 text-black pt-2.5  pb-[50px]">
                  <h2 className="text-[50px] font-bold w-[420px] leading-none">
                    Unlock Your Language Potential
                  </h2>
                  <p className="text-[20px] font-medium w-[550px]">
                    Embark on an exhilarating journey to discover the joy of
                    mastering multiple languages through our immersive.
                  </p>
                  <div className="flex gap-3">
                    <div
                      onClick={handleClick}
                      className="cursor-pointer p-3 bg-primary-deep text-white text-xl rounded-md items-center"
                    >
                      Enroll Now
                    </div>
                    <div className="p-3 border-2 text-black border-black text-xl rounded-md items-center">
                      Contact Us
                    </div>
                  </div>
                </div>
                <div className="w-[50%] h-full">
                  <img
                    src="/images/istockphoto-health.jpg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
