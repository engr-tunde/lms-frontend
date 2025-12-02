const CourseCard = ({price, title, tag, image, discount, position, action, normal, img}) => {
    // const navigate = useNavigate();
 
    //  const handleClick = () => {
    //     navigate("/login")
    //  }

    return (
        <div className="relative">
            <div className={`w-[250px] h-[300px] bg-no-repeat bg-cover bg-center items-center flex gap-2 flex-col p-3 text-black border border-[rgb(233,234,242)] rounded-lg`}>
                <div className="flex flex-col w-full gap-3">
                    <div className="w-[w-full] h-[150px] rounded-md"><img src={`/images/${image}`} className="w-full rounded-md h-full" alt="" /></div>
                    <h3 className="text-black text-sm font-semibold">{title}</h3>
                    <div className="flex justify-between items-center w-full mt-10">
                        <span className="bg-[rgb(194,233,235)] p-1 rounded-md font-semibold text-xs">{tag}</span>
                        <div className="flex gap-3 font-semibold text-lg">
                            <span className="text-black">{discount}</span>
                            <span className="text-[rgb(185,130,119)] line-through">{price}</span>
                        </div>
                    </div>
                
                </div>
                
                {/* <div className="bg-white w-[95%] rounded-md">
                   <div className="flex flex-col p-3">
                            <div className="flex text-sm text-[rgb(169,115,151)] gap-1 border p-0.5 border-[rgb(209,210,224)] rounded-md text-start w-max items-center">
                                <MdOutlinePeopleAlt />
                                <span className="">{people}</span>
                            </div>
                        <div className="text-start text-[rgb(42,83,168)] text-lg mt-2">{title}</div>
                        <div className="flex justify-end text-[rgb(95,96,111)] mt-4"><FiArrowRight /></div>
                   </div>
                   
                </div> */}
            </div>
        </div>
    )
}
export default CourseCard;