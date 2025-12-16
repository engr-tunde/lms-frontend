import { fetchAllCourses } from "../../api";
import CourseCard from "../../components/cards/CourseCard";


const CoursePage = () => {
    const { data, loading, mutate } = fetchAllCourses()
    console.log(data)
    return (
        <div className="w-screen">
            <div className="w-full flex flex-col gap-3 p-10">
                {/* <div className="mt-28 flex gap-3 items-center">

                    </div>
                </div> */}
                <h2 className="mt-28 text-4xl text-custom-title font-bold px-1">
                    What to learn next...
                </h2>
                <div className="flex flex-col gap-2 mt-4">
                    <h3 className="text-3xl text-custom-text font-bold px-1">Recomend for you</h3>
                    <div className="grid grid-cols-4 gap-3 w-full py-2 mt-1">
                        {
                            data?.data.map((content, i)=> (
                                <div key={i}>
                                    <CourseCard course={content}  title={content.title}  tag={content.category} image={content.image} discount={content.total_price} price={content.price} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )

}
export default CoursePage;