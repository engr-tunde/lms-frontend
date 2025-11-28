const  Slide = ({priceX, titleX, detailsX,priceY, titleY, detailsY, slide }) => {
    
    return (
        <div className="flex gap-3 justify-center items-center w-[812px]" slide={slide}>
            <div className={"w-[400px] h-[330px]  bg-[rgb(21,112,187)] shadow-[1px_3px_8px_3px_#000c0275]  flex gap-2 flex-col p-1 text-white rounded-lg"} >
                <span className="text-end text-xl">{priceX}</span>
                <p className="font-medium text-center">{titleX}</p>
                <div className="text-center">{detailsX}</div>
            </div>
            <div className={"w-[400px] h-[330px]  bg-[rgb(21,112,187)] shadow-[1px_3px_8px_3px_#000c0275]  flex gap-2 flex-col p-1 text-white rounded-lg"} >
                <span className="text-end text-xl">{priceY}</span>
                <p className="font-medium text-center">{titleY}</p>
                <div className="text-center">{detailsY}</div>
            </div>
        </div>
    )
}
export default Slide;