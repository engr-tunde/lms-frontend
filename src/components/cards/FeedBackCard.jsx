// const  = () => {


//     return (
//         <div>
//             <div className="border-2 border-black rounded-full size-[85px]"><img src="" alt="" /></div>
//             <h3 className="text-[22px] font-medium">Macky Q. Anderson</h3>
//             <p className="text-21">Web Desginer, Web Company</p>
//         </div>
//     )

// }

// export default FeedBackCard
import { IoIosArrowForward } from "react-icons/io";
const  FeedBackCard = ({courseA, detailsA, picA, titleA, identityA, courseB, detailsB, picB, titleB, identityB, slide,
    courseC, detailsC, picC, titleC, identityC,
 }) => {
    
    return (
        <div className="grid grid-cols-3 gap-2 justify-center items-center w-[1100px] p-2" slide={slide}>
            <div className={`w-[345px] h-[300px] bg-no-repeat bg-cover bg-center items-center flex gap-2 flex-col p-7 text-black border border-[rgb(233,234,242)] rounded-lg`}>
                <div className="flex flex-col w-full gap-3">
                    <div className="size-[30px]"><img src={`/images/quote.svg`} className="size-[41px]" alt="" /></div>
                    <p className="text-black text-sm font-semibold">{detailsA}</p>
                    <div className="flex justify-start gap-2 items-center w-full mt-5">
                        <div className="size-[41px] rounded-full"><img className="size-full rounded-full" src={`images/${picA}`} alt="" /></div>
                        <div className="flex flex-col gap-1 font-semibold text-lg justify-center">
                            <span className="text-[rgb(89,92,115)] text-sm leading-0.5 font-extralight">{identityA}</span>
                            <span className="text-[rgb(145,148,172)] text-xs font-light">{titleA}</span>
                        </div>
                    </div>
                    <div className="flex gap-2 text-blue-600 mt-7 text-xs items-center justify-center">
                        <p className="">View the {`${courseC}`} course they took</p>
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
            <div className={`w-[345px] h-[300px] items-center flex gap-2 flex-col p-7 text-black border border-[rgb(233,234,242)] rounded-lg`}>
                <div className="flex flex-col w-full gap-3">
                    <div className="size-[30px]"><img src={`/images/quote.svg`} className="size-[35px]" alt="" /></div>
                    <p className="text-black text-sm font-semibold">{detailsB}</p>
                    <div className="flex justify-start gap-2 items-center w-full mt-5">
                        <div className="size-[41px] rounded-full "><img className="size-[41px] rounded-full" src={`images/${picB}`} alt="" /></div>
                        <div className="flex flex-col gap-1 font-semibold text-lg">
                            <span className="text-[rgb(89,92,115)] text-sm leading-0.5 font-extralight">{identityA}</span>
                            <span className="text-[rgb(145,148,172)] text-xs font-light">{titleA}</span>
                        </div>
                    </div>
                    <div className="flex gap-2 text-blue-600 mt-7 text-xs items-center justify-center">
                        <p className="">View the {`${courseC}`} course they took</p>
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
            <div className={`w-[345px] h-[300px] items-center justify-start flex gap-2 flex-col p-7 text-black border border-[rgb(233,234,242)] rounded-lg`}>
                <div className="flex flex-col w-full gap-3 justify-start">
                    <div className="size-[30px]"><img src={`/images/quote.svg`} className="size-[41px]" alt="" /></div>
                    <p className="text-black text-sm font-semibold">{detailsC}</p>
                    <div className="flex justify-start gap-2 items-center w-full mt-5">
                        <div className="size-[41px] rounded-full"><img className="size-full rounded-full" src={`images/${picC}`} alt="" /></div>
                        <div className="flex flex-col gap-1 font-semibold text-lg">
                            <span className="text-[rgb(89,92,115)] text-sm leading-0.5 font-extralight">{identityA}</span>
                            <span className="text-[rgb(145,148,172)] text-xs font-light">{titleA}</span>
                        </div>
                    </div>
                    <div className="flex gap-2 text-blue-600 mt-7 text-xs items-center justify-center">
                        <p className="">View the {`${courseC}`} course they took</p>
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default FeedBackCard;