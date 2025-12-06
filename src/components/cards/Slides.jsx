const  Slide = ({priceA, titleA, discountA, tagA, imageA, priceB, titleB, discountB, tagB, imageB, slide,
    priceC, titleC, discountC, tagC, imageC, priceD, titleD, discountD, tagD, imageD
 }) => {
    
    return (
        <div className="w-[280px] p-3 pb-6" slide={slide}>
            <div className={`w-[280px] cursor-pointer h-[310px] bg-no-repeat bg-cover bg-center items-center flex gap-2 flex-col p-3 text-black border border-[rgb(233,234,242)] rounded-lg`}>
                <div className="flex flex-col w-full gap-3">
                    <div className="w-[w-full] h-[150px] rounded-md"><img src={`/images/soft-health-skills.jpg`} className="w-full rounded-md h-full" alt="" /></div>
                    <h3 className=" text-sm font-semibold text-custom-title">{titleA}</h3>
                    <div className="flex flex-col justify-between w-full mt-3 gap-3">
                        <span className="bg-[rgb(194,233,235)] p-1 rounded-md font-semibold text-xs w-max ">{tagA}</span>
                        <div className="flex gap-3 font-semibold text-lg">
                            <span className="text-black">{discountA}</span>
                            <span className="text-[rgb(185,130,119)] line-through">{priceA}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={`w-[280px] h-[310px] bg-no-repeat bg-cover bg-center items-center flex gap-2 flex-col p-3 text-black border border-[rgb(233,234,242)] rounded-lg`}>
                <div className="flex flex-col w-full gap-3">
                    <div className="w-[w-full] h-[150px] rounded-md"><img src={`/images/${imageB}`} className="w-full rounded-md h-full" alt="" /></div>
                    <h3 className="text-black text-sm font-semibold">{titleB}</h3>
                    <div className="flex flex-col justify-between w-full mt-3 gap-3">
                        <span className="bg-[rgb(194,233,235)] p-1 rounded-md font-semibold text-xs w-max">{tagB}</span>
                        <div className="flex gap-3 font-semibold text-lg">
                            <span className="text-black">{discountB}</span>
                            <span className="text-[rgb(185,130,119)] line-through">{priceB}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-[280px] h-[310px] bg-no-repeat bg-cover bg-center items-center flex gap-2 flex-col p-3 text-black border border-[rgb(233,234,242)] rounded-lg`}>
                <div className="flex flex-col w-full gap-3">
                    <div className="w-[w-full] h-[150px] rounded-md"><img src={`/images/${imageC}`} className="w-full rounded-md h-full" alt="" /></div>
                    <h3 className="text-black text-sm font-semibold">{titleC}</h3>
                    <div className="flex justify-between w-full mt-3 gap-3 flex-col">
                        <span className="bg-[rgb(194,233,235)] p-1 rounded-md font-semibold text-xs w-max">{tagC}</span>
                        <div className="flex gap-3 font-semibold text-lg">
                            <span className="text-black">{discountC}</span>
                            <span className="text-[rgb(185,130,119)] line-through">{priceC}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-[280px] h-[310px] bg-no-repeat bg-cover bg-center items-center flex gap-2 flex-col p-3 text-black border border-[rgb(233,234,242)] rounded-lg`}>
                <div className="flex flex-col w-full gap-3">
                    <div className="w-[w-full] h-[150px] rounded-md"><img src={`/images/${imageD}`} className="w-full rounded-md h-full" alt="" /></div>
                    <h3 className="text-black text-sm font-semibold">{titleD}</h3>
                    <div className="flex justify-between w-full mt-3 gap-3 flex-col">
                        <span className="bg-[rgb(194,233,235)] p-1 rounded-md font-semibold text-xs w-max">{tagD}</span>
                        <div className="flex gap-3 font-semibold text-lg">
                            <span className="text-black">{discountD}</span>
                            <span className="text-[rgb(185,130,119)] line-through">{priceD}</span>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
export default Slide;