import { GrCheckmark } from "react-icons/gr";
const WhatToLearn = ({contents}) => {
    return (
        <div className="w-full p-1 text-[16px]">
            <div className="w-full flex gap-2 justify-center">
                <GrCheckmark className="mt-0.5 w-5"/>
                <div>
                    {contents}
                </div>
            </div>
        </div>
    )
}
export default WhatToLearn;