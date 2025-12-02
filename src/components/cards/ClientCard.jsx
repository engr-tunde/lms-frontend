import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const ClientCard = ({details,client, title}) => {

    return (
        <div className="flex flex-col gap-3 w-[380px] text-start">
            <div className="flex gap-px text-primary-deep text-[16px]">
                <RiDoubleQuotesL />
                <RiDoubleQuotesR />
            </div>
            <div className="h-[250px]"><p className="text-[25px]">{details}</p></div>
            <div className="flex flex-col gap-3 text-start">
                <p className="text-[16px] font-bold">{client}</p>
                <p className="text-[14px] font-normal">{title}</p>
            </div>
        </div>
    )

}
export default ClientCard;