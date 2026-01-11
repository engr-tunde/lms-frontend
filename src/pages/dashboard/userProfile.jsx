import { fetchUserData } from "../../api"



const UserProfile = () => {

    const {data} = fetchUserData();
    return (
        <div className="w-full p-2">
            <div className="flex flex-col w-full h-[200px] relative">
                {/* <div className="absolute text-2xl font-semibold text-white left-[40%] top-[40%]">User Profile</div> */}
                <div className="w-full h-full rounded-md"><img className="rounded-md w-full h-full" src="/images/healthcare-12.jpeg" alt="" /></div>
                <div className="bg-white rounded-full p-1 size-[130px] absolute bottom-[-30%] left-[3%]">
                    {
                        data?.data?.img ? <div><img src={data?.data?.img} alt="" /></div> : <div className="size-full"><img className="size-full rounded-full" src="/images/user_img_avatar.png" alt="" /></div>
                    }
                </div>
            </div>
            <div className="mt-18 ml-10 text-2xl font-semibold">
                {
                    data ? data?.data.name : null
                }
            </div>
            <div className="mt-1 ml-10 text-lg font-medium text-custom-text">
                {
                    data ? data?.data.email : null
                }
            </div>
            <div className="mt-1 ml-10 flex gap-5 items-center">
                <div className="font-medium text-custom-title">Created since: <span className="text-sm text-custom-text font-normal">{data ? data?.data.createdAt : null}</span></div>
                <div className="w-max flex gap-2 items-center">
                    <span className={data ? "size-1.5 rounded-full bg-red-600 " : "hidden"}></span>
                    <span className="text-lg text-custom-text">{data ? data?.data.status : null}</span>
                </div>
            </div>
            <div className="w-[80%] mx-auto">
                <div className="flex flex-col w-full border border-[rgb(240,240,240)] rounded-md mt-10 ">
                    <div className="h-10 bg-[rgb(243,243,243)] p-2 text-center text-xl font-semibold">User Profile</div>
                    <div className="w-full flex p-1 justify-between items-center h-10 border-b border-[rgb(240,240,240)]">
                        <div className="p-1 "> 
                            Name  
                        </div>
                        <div className="p-1">
                            {
                                data ? data?.data.name : null
                            }
                        </div>
                    </div>
                    <div className="w-full flex p-1 justify-between items-center h-10">
                        <div className="p-1"> 
                            Email  
                        </div>
                        <div className="p-1">
                            {
                                data ? data?.data.email : null
                            }
                        </div>
                    </div>
                    
                </div>

                {/* <div className="w-max bg-[rgb(240,240,240)] p-3 text-center rounded-md mt-5 text-sm">
                        Update profile
                </div> */}
            </div>
            
            
        </div>
    )

}
export default UserProfile