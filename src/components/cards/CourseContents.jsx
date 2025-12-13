import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { object } from "yup";

const CourseContentCard = ({title, objectives, isOpen}) => {
    
    const giveDetails = () => {
        setOpen(!open)
    }
    return(
        <div className="w-full border-b border-b-[rgb(209,210,224)] rounded-sm flex flex-col">
            <div className="w-full flex items-center h-[50px] px-1 bg-[rgb(246,247,249)]">
                <div className="flex gap-5 text-[15px] font-bold">
                    <div className="flex relative pt-1">
                        <div className={isOpen ? "hidden" : "absolute" }><IoIosArrowDown /></div>
                        <div className={isOpen ? "absolute " : "hidden" }><IoIosArrowUp  /></div>
                    </div>
                    <div className="w-max ">{title}</div>
                </div>
            </div>
            <div className={isOpen ? "w-full bg-white pl-5 px-2 " : "hidden"}>
                {objectives}
            </div>
            
        </div>
    )
}
export default CourseContentCard; 