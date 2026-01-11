import { fetchUserData } from "../../api";

const UserDetails = () => {
    const {data} = fetchUserData()
    console.log(data)
return (
    <div className=" flex gap-3 items-center">
        <div className="size-[45px] p-1 bg-black text-white      rounded-full flex items-center justify-center ">AA</div>
        <div>
        <div className="text-xl font-semibold">Welcome Back, 
            <span className="ml-1">
                {
                    data ?  data?.data.name : "user's name"
                }
            </span>
        </div>
        <div>{
            data ?  data?.data.email : "user's name"
            }
        </div>
        </div>
    </div>
)

}
export default UserDetails;