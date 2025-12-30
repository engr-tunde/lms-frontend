import { fetchUserCourses, fetchUserData } from "../../api";
import CourseCard from "../../components/cards/CourseCard";

const UserCoursePage = () => {
    // const { data, loading, mutate } = fetchUserData();
    const { data, loading, mutate } = fetchUserCourses()
    console.log("user", data)
    return (
        <div className="w-screen">
            <div className="w-full flex flex-col gap-3 pX-8">
                <div className=" flex gap-3 items-center">
                    <div className="size-[45px] p-1 bg-black text-white      rounded-full flex items-center justify-center ">AA</div>
                    <div>
                        <div className="text-xl font-semibold">Welcome Back, 
                            <span>
                            User's Name
                            </span></div>
                        <div>Email</div>
                    </div>
                </div>
                <h2 className="mt-6 text-4xl text-custom-title font-bold px-1">
                    What to learn next...
                </h2>
                <div className="flex flex-col gap-2 mt-4">
                    <h3 className="text-3xl text-custom-text font-bold px-1">Available Courses for you</h3>
                    <div className="grid grid-cols-4 gap-3 w-full py-2 mt-1">
                        {
                            data?.data.map((content, i)=> (
                                <div key={i}>
                                    <CourseCard  title={content.title}  tag={content.category} image={content.image} discount={content.total_price} price={content.price} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )

}
export default UserCoursePage;