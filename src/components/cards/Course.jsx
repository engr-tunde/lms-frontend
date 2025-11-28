import { ImArrowUpRight2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const Course = ({price, title, details, image, name, position, action, normal}) => {
    const navigate = useNavigate();

     const handleClick = () => {
        navigate("/login")
     }

    return (
        <div className="relative">
            <div className={normal ? "w-[270px]   bg-[rgb(21,112,187)] shadow-[1px_3px_8px_3px_#000c0275] justify-center items-center flex gap-2 flex-col p-3 text-white rounded-md " : "w-[350px]  bg-[rgb(21,112,187)] shadow-[1px_3px_8px_3px_#000c0275]  flex gap-3 flex-col p-1 text-white rounded-md"}>
                <span className="text-end text-xl">{price}</span>
                <p className="font-medium text-center">{title}</p>
                <div className="text-start mb-2">{details}</div>
                <div className={normal ? "hidden" : "flex gap-1 items-center"}>
                    <div className="size-[30px] rounded-full"><img src={`/images/${image}`} alt="" className="size-full rounded-full" /></div>
                    <div className="flex flex-col">
                        <p>{name}</p>
                        <p>{position}</p>
                    </div>
                </div>
            </div>
            
            <div onClick={handleClick} className={normal ? "bg-[rgb(254,194,0)] cursor-wait size-[60px] text-[rgb(0,44,30)]   rounded-full flex justify-center items-center  absolute left-[105px] -bottom-10" : "bg-[rgb(254,194,0)] cursor-pointer w-[130px] h-[60px] text-xl font-medium rounded-l-full flex justify-center items-center absolute left-[220px] text-[rgb(0,44,30)] -bottom-px"}>{normal ? <ImArrowUpRight2/> : action}</div>
        </div>
    )
}
export default Course;