import DashboardCouseStatus from "../../components/cards/DashbaordCourseStatus";
import DashboardCard from "../../components/cards/DashboardCard";
import Table from "../../components/Table";
import { dashboardCards } from "../../utils/dataArr";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

const DashboardPage = ({data}) => {

    const tableColumnCourses = [
        {
            title: "Courses",
        },
        {
            title: "Status"
        }
    ]

    const tableColumnOrders = [
        {
            title: "Orders",
        },
        {
            title: "Status"
        }
    ]
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
                    <div className="justify-center items-center grid grid-cols-4 gap-5 w-full" >
                        {
                            dashboardCards.map((item, i) => {
                                const FaIconComponent = FaIcons[item.FaIcon];
                                const IoIconComponent = IoIcons[item.IoIcon]
                                return (
                                    <div className="w-full relative" key={i} >
                                        <DashboardCard count={item.counts} title={item.title} detail={item.details}  />
                                        <div className={IoIconComponent && i%2 !== 0 ? "text-[rgb(5,150,105)] bg-[rgb(209,250,229)] p-2 text-[23px] flex items-center justify-center rounded-md absolute top-[35%] right-[12%]" : "text-[rgb(0,0,0)] bg-[rgb(254,243,199)] text-[23px] flex items-center p-2 rounded-md justify-center absolute top-[35%] right-[12%]"}>
                                            {
                                                IoIconComponent ? <IoIconComponent /> : null
                                            }
                                        </div>
                                        <div className={FaIconComponent ? "text-[rgb(61,117,238)] bg-[rgb(219,234,254)] text-[23px] p-2 flex items-center justify-center rounded-md absolute top-[35%] right-[12%]" : null}>
                                            {
                                                FaIconComponent ? <FaIconComponent /> : null
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="w-full flex justify-between mt-20">
                        <div className="w-[45%] p-1 border border-custom-text rounded-md">
                            < Table tableColumn={tableColumnCourses}
                                rowData={data?.data}
                                rowTemplate={DashboardCouseStatus}
                            />
                        </div>
                        <div className="w-[45%] p-1 border border-custom-text rounded-md">
                            < Table tableColumn={tableColumnOrders}
                             />
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
    
}
export default DashboardPage
