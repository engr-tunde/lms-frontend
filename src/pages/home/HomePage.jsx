import Course from "../../components/cards/Course";
import Slide from "../../components/cards/Slides";
// import Button from "../../component/global/Button";
import OurOffers from "../../components/uniqueContent/OurOffer";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { courseContent, briefContent } from "../../utils/dataArr";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const slides = [
        {
            id:"1",
            priceX:"$30", 
            titleX: "health1",
            priceY:"$40", 
            titleY: "health2"
        },
        {
             id:"2",
            priceX:"$40", 
            titleX: "health2",
            priceY:"$50",
            titleY: "health3",

        },
        {
             id:"3",
            priceX:"$50",
            titleX: "health3",
            priceY:"$60",
            titleY: "health4"
        },
        {
             id:"4",
            priceX:"$60",
            titleX: "health4",
            priceY:"$70",
            titleY: "health5"
        },
        {
             id:"5",
            priceX:"$70",
            titleX: "health5",
            priceY:"$30",
            titleY: "health6"
        },
        
    ]
    console.log( slides.length)
    
     const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
     const translateBy = currentSlideIndex * 826

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
        const isLastSlide = currentSlideIndex === slides.length - 1

        const newIndex =  isLastSlide ? 0 : currentSlideIndex + 1
        setCurrentSlideIndex(newIndex) 
        console.log(newIndex)
     };
     const prevSlide = () => {
        const isFirstSlide = currentSlideIndex === 0
        const newIndex =  isFirstSlide ? slides.length - 1 : currentSlideIndex - 1
        setCurrentSlideIndex(newIndex) 
        console.log(newIndex)
     }

     const navigate = useNavigate();

     const handleClick = () => {
        navigate("/login")
     }

    return (
        <div className="w-screen flex flex-col">
            <div className="mt-[200px] w-full z-10">
                <div className="flex flex-col justify-center w-full items-center">
                    {/* first section */}
                    <p className="flex flex-col text-[100px] w-[90%] leading-none font-bold justify-center">
                        <span className="text-center">Your Gateway </span>
                        <span className="text-start">To Health Skills </span>
                        <span className="text-center">Proficiency</span>
                    </p>
                    {/* 2nd section */}
                   <div className="w-[90%] mt-[50px]">
                     <img src="/images/banner1.jpg" alt="" className="w-full h-[350px] rounded-md"/>
                   </div>
                   {/* 3rd section */}
                   <div className="justify-center w-[90%] mb-[100px]">
                        <div className="flex mt-10 w-full  justify-between items-center text-[22px] font-normal">
                            <div className="gap-5 flex">
                                <div className="flex flex-col gap-8 item-center">
                                    <p className="text-[20px] w-[550px]">Unlock the world by mastering languages. We offers an immersive, interactive, and personalized language learning.</p>
                                    <div className=" flex gap-32 items-center">
                                        <div className="flex justify-center items-center w-[200px] h-[55px] bg-[rgb(254,194,0)] rounded-md">Get in touch</div>
                                        <div className="flex gap-2 items-center">
                                            <div className="border-[1px] border-black size-[70px] rounded-full"><img src="" alt="" /></div>
                                            <div className="text-[20px] font-medium">watch video</div>
                                        </div> 
                                    </div>
                                </div>
                                <img src="/images/shape2.svg" alt="" className="w-[130px]" />
                            </div>
                            {/* <Button size="500px" title="Explore all courses"/> */}
                            <div onClick={handleClick} className=" cursor-pointer p-3 flex justify-center text-center items-center size-[150px] text-2xl font-semibold rounded-full bg-[rgb(254,194,0)]">Explore all courses</div>
                        </div>
                   </div>
                   {/* 4th section */}
                   <div className="bg-img w-full flex justify-center items-center py-12 ">
                        <div className="w-[90%] justify-center items-center grid grid-cols-4">
                            {
                            briefContent.map((content, i)=> (
                                <div key={i} className="">
                                    <Course normal price={content.cost} title={content.title} details={content.details}/>
                                </div>
                            ))
                            }
                        </div>

                    </div>
                    {/* 5th section */}
                   <div className= "w-full h-[650px] py-[80px] flex justify-center items-center">
                        <div className="w-[90%] flex gap-2 items-center justify-center py-10">
                            <div className="w-[50%] h-[480px]  "><img src="/images/about1.jpg" alt="" className="rounded-md w-full h-full"/></div>
                            <div className="flex flex-col gap-4 w-[50%] p-2">
                                <h3 className="text-[48px] font-semibold">Delving into Our Health Literacy Odysse</h3>
                                <p className="text-[20px] font-normal">We are dedicated to fostering a vibrant community of language learners committed to linguistic proficiency and cultural appreciation. Established in 2002</p>
                                <p className="text-[20px] font-normal">Our journey began with a vision to provide an immersive and comprehensive language education experience guided by.</p>
                                <div onClick={handleClick} className="cursor-pointer w-[150px] h-[50px] bg-[rgb(254,194,0)] flex justify-center items-center text-black rounded-md">
                                    Enroll Now
                                </div>
                            </div>
                        </div>  
                   </div>
                   {/* 7th section */}
                   <div className="w-full h-[] pt-[10px] pb-[50px] flex justify-center item-center bg-img">
                        <div className="w-[90%] flex flex-col gap-[20px] justify-center items-center">
                            <div className="flex justify-between items-center w-full">
                                <p  className="text-[48px] font-bold w-[280px] leading-tight text-white">Our Popular Courses</p>
                                <div onClick={handleClick} className="cursor-pointer p-3 h-[60px] flex justify-center text-center items-center text-2xl font-semibold rounded-md bg-[rgb(254,194,0)]">Explore all courses</div>
                            </div>
                            <div className="bg-img w-full p-3 justify-center items-center grid grid-cols-3 gap-2">
                                {
                                    courseContent.map((content, i)=> (
                                        <div key={i}>
                                            <Course price={content.cost} title={content.title} details={content.details} image={content.image} name={content.instructorName} position={content.positon} action={content.action}/>
                                        </div>
                                    ))
                                }
                            
                            </div>
                        </div>
                    </div>
                    {/*8th  section */}
                    <div className="w-full flex h-[600px]">
                        <div className="h-full w-[50%]"><img src="/images/why-us1.jpg" alt="" className="h-full" /></div>
                        <div className="w-[50%] h-full p-8 flex flex-col gap-5 bg-[rgb(254,194,0)] items-start justify-center">
                            <h2 className="text-[50px] font-bold w-[70%]">Unraveling the Unique WHY US</h2>
                            <OurOffers image="/images/expert.svg" title="Expert Faculty" details="Emphasize the qualifications and expertise of your instructors. Highlight their experience."/>
                            <OurOffers image="/images/small.svg" title="Expert Faculty" details="Emphasize the qualifications and expertise of your instructors. Highlight their experience."/>
                            <OurOffers image="/images/learning.svg" title="Expert Faculty" details="Emphasize the qualifications and expertise of your instructors. Highlight their experience."/>
                        </div>
                    </div>
                    {/* 9th section */} 
                    <div className="w-full pt-[10px]  pb-[50px] flex bg-img  flex-col justify-center items-center">                              
                        <div className="flex flex-col items-center justify-start h-[550px]">
                            <div className="flex flex-col justify-start items-center w-[90%]  gap-4 ">
                                <h2 className="text-[58px] font-bold w-[60%]  leading-tight text-white text-center">Upcoming Courses These will be started soon</h2>
                                <div className={`h-[360px] relative 
                                    `}>
                                    <div className={`h-full w-[826px] overflow-hidden`}>
                                            <div className={`flex gap-4 h-[100%] transform ease-out duration-300 `} style={{width: `calc(826 * ${slides.length}px)`, transform: `translateX(${-translateBy}px)`}}>
                                                { 
                                                    slides.map((slide, i) => { 
                                                    console.log(slide)
                                                    console.log(currentSlideIndex )
                                                    console.log(currentSlideIndex * 826 )
                                                    // const translate = currentSlideIndex * 826
                                                    return(
                                                    <div className={`w-[100%] h-[100%] `} key={i} slides={slide.id}>
                                                        <Slide priceX={slide.priceX} titleX={slide.titleX}  
                                                        priceY={slide.priceY} titleY={slide.titleY} />
                                                            {/* <Slide price={ currentSlideIndex === slides.length - 1 ? slides[0].price  :  slides[currentSlideIndex + 1].price }  title={currentSlideIndex === slides.length - 1 ? slides[0].title : slides[currentSlideIndex + 1].title} /> */}
                                                    </div>
                                                    )
                                                    })
                                                }
                                            </div>   
                                        </div>
                                    
                                    <div className="flex p-3 justify-center items-center w-full">
                                        <div className="absolute z-50 bg-[rgb(254,194,0)] size-[50px] rounded-full left-[-60px] top-[40%]  p-1 flex justify-center  items-center transform translate-x-0 translate-y-1/2 cursor-pointer" onClick={prevSlide}><FaChevronLeft /></div>
                                        <div className="absolute z-50 bg-[rgb(254,194,0)] size-[50px] rounded-full right-[-60px] top-[40%]
                                            p-1 flex justify-center items-center transform translate-x-0 translate-y-1/2 cursor-pointer" onClick={nextSlide}  ><FaChevronRight/></div>
                                    </div>
                                </div>
                                
                                
                            </div>
                            {/* <div className="flex flex-col justify-center items-center ] w-[90%]  gap-4 ">
                                <h2 className="text-[58px] font-bold w-[60%]  leading-tight text-white text-center">Upcoming Courses These will be started soon</h2>
                                <div className="flex items-center justify-center gap-6 relative">
                                    <Slide price="2" />
                                    <Slide />
                                    <div className="absolute bg-[rgb(254,194,0)] size-[50px] rounded-full left-[-18px] p-1 flex justify-center items-center"><FaChevronLeft /></div>
                                    <div className="absolute bg-[rgb(254,194,0)] size-[50px] rounded-full right-[-18px]
                                    p-1 flex justify-center items-center"><FaChevronRight/></div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/* 10th section */} 
                    <div className="w-full pt-[10px]  pb-[50px] flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-center w-[90%]  gap-4">
                            <h2 className="text-[50px] font-semibold">What our students say</h2>
                            <p className=" text-center w-[60%] text-[21px] font-medium">
                                "Learning at LOGO has been an enriching experience. The instructors are not only skilled but incredibly passionate about teaching. The immersive approach has significantly boosted my confidence in speaking the language."
                            </p>
                            <div className="flex flex-col justify-center items-center ] w-[90%]  gap-2">
                                <div className="border-[2px] border-black rounded-full size-[85px]"><img src="" alt="" /></div>
                                <h3 className="text-[22px] font-medium">Macky Q. Anderson</h3>
                                <p className="text-21">Web Desginer, Web Company</p>
                            </div>
                            <div className="flex gap-1">
                                <div className="p-1 border-black border-[2px] rounded-full size-5 "><div className="bg-black size-full rounded-full"></div></div>
                                <div className="p-1 border-black border-[2px] rounded-full size-5 "><div className="bg-black size-full rounded-full hidden"></div></div>
                                <div className="p-1 border-black border-[2px] rounded-full size-5 "><div className="bg-black size-full rounded-full hidden"></div></div>
                            </div>
                        </div>
                    </div>
                    {/* 11th section */}
                    <div className="w-full   bg-[rgb(254,194,0)]">
                        <div className="flex justify-center items-center h-[460px]">
                            <div className="flex  w-full h-full justify-center items-center ">
                                <div className="flex flex-col gap-4 w-[50%] h-full justify-center items-start px-[20px] text-black pt-[10px]  pb-[50px]">
                                    <h2 className="text-[50px] font-bold w-[420px] leading-none">Unlock Your Language Potential</h2>
                                    <p className="text-[20px] font-medium w-[550px]">Embark on an exhilarating journey to discover the joy of mastering multiple languages through our immersive.</p>
                                    <div className="flex gap-3">
                                         <div onClick={handleClick} className="cursor-pointer p-3 bg-[rgb(254,194,0)] text-black text-xl rounded-md items-center">Enroll Now</div>
                                         <div className="p-3 border-[2px] text-black border-black text-xl rounded-md items-center">Contact Us</div>
                                    </div>
                                </div>
                                <div className="w-[50%] h-full"><img src="/images/istockphoto-health.jpg" alt="" className="w-full h-full"/></div>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>  
        </div>
        
    )

}
export default HomePage;
