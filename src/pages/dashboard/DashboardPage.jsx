import DashboardCard from "../../components/cards/DashboardCard";
import { dashboardCards } from "../../utils/dataArr";
// import * as FaIcons from "react-icons/fa";
// import * as IoIcons from "react-icons/io";

const DashboardPage = ({data}) => {
    return (
        <div className="w-full p-1">
            <div className="text-2xl font-semibold mb-3">
                Welcome!
            </div>
            <div className="flex w-full flex-col">
                <p className="flex w-full h-[150px] justify-center items-center course-img text-white font-medium text-3xl rounded-md">
                    Dashboard
                </p>
                <div className="bg-[rgb(249,250,251)] w-full p-3 fex flex-col text-black rounded-md pb-7">
                    <div className="w-full flex justify-center mb-10 flex-col items-center gap-3">
                        <div className="size-[100px] rounded-full">
                            <img className="size-full rounded-full" src="/images/user_img_avatar.png" alt="" />
                        </div>
                        <span className="text-2xl font-medium">{data ? data?.username : "User Account Name"}</span>
                    </div>
                    <div className="justify-center items-center grid grid-cols-4 gap-3 w-full" >
                        {
                            dashboardCards.map((item, i) => {
                                // const FaIconComponent = FaIcons[item.icon];
                                // const IoIconComponent = IoIcons[item.IoIcon]
                                return (
                                    <div className="w-full" key={i}>
                                        <DashboardCard count={item.counts} title={item.title} detail={item.details} />
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
    
}
export default DashboardPage
