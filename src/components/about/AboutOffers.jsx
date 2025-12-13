import * as FaIcons from "react-icons/fa";
const AboutOfferComponent  = ({Icon, value, }) => {
    return (
        <div className="flex items-center gap-2">
            <Icon />
            <p>{value}</p>
        </div>
    )
}
export default AboutOfferComponent;