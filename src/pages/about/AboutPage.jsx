import ClientCard from "../../components/cards/ClientCard";
import { FirmFeedBack, stats, statsSecond } from "../../utils/dataArr";
import { Link } from "react-router-dom";
const AboutPage = () => {
    return (
        <div className="w-screen">
            <div className="w-full flex flex-col justify-center items-center font-[stack]">
                <div className="w-full bg-[rgb(247,249,250)] border-b border-black flex justify-center">
                    <div className="w-[80%] flex justify-between items-center h-[550px] pt-10  ">
                        <h2 className="text-5xl font-bold pl-10">Welcome to where possibilities begin</h2>
                        <img className="w-[500px]" src="/images/cta.jpg" alt="" />
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center p-10 ">
                    <div className="w-[80%] flex flex-col justify-center items-center">
                        <div className=" w-full flex flex-col gap-2 justify-center items-center">
                            <h2 className="text-4xl font-semibold">Skills are the key to unlocking potential</h2>
                            <p className="text-lg font-normal text-center">Whether you want to learn a new skill, train your teams, or share what you know with the world, you’re in the right place. As a leader in online learning, we’re here to help you achieve your goals and transform your life.</p>
                        </div>
                        <div className="flex w-full justify-between items-center mt-16">
                            <img className="w-[550px]" src="/images/Social-Care-9.jpg" alt="" />
                            <div className="flex flex-col gap-2.5 w-[400px]">
                                <h2 className="text-3xl font-semibold">Learning and leading through change</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit eius accusamus non, tempore facere veniam odit? Eos laudantium voluptas amet nobis beatae harum tenetur animi enim. Sequi culpa ex voluptas accusamus error perspiciatis, fugit ducimus doloremque numquam qui vero quas quod optio magni modi! Quae voluptates adipisci laboriosam deserunt sequi!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10 p-10 w-full bg-primary-deep text-white">
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <h3 className="text-5xl font-bold">Creating Impact around the world</h3>
                        <p className="text-lg text-center w-[790px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam similique blanditiis ab ex? Quibusdam praesentium minima quos sapiente ad vel voluptatibus, alias sunt accusantium excepturi!</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-[80%] grid grid-cols-3 items-center justify-between text-center">
                            {
                                stats.map((content, i) => {
                                    return (
                                        <div className="flex flex-col leading-2.5" key={i}>
                                            <div className="text-5xl font-bold">{content.number}</div>
                                            <div className="text-lg font-medium">{content.reaction}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="w-[60%] mt-10 grid grid-cols-2 items-center justify-between text-center">
                            {
                                statsSecond.map((content, i) => {
                                    return (
                                        <div className="flex flex-col leading-2.5" key={i}>
                                            <div className="text-5xl font-bold" >{content.number}</div>
                                            <div className="text-lg font-medium">{content.reaction}</div>
                                        </div>
                                    )
                                }) 
                            }
                        </div>
                    </div>
                    
                    <div></div>
                </div>
                <div className="flex w-full flex-col gap-5 justify-center items-center p-10 py-28">
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <div className="text-center w-[62%] text-[19px]">We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.</div>
                        <Link to="" className="bg-black text-white p-2 text-lg font-semibold">Learn More</Link>
                    </div>
                    <div className="w-[80%] flex justify-between mt-10">
                        {
                            FirmFeedBack.map((item, i) => {
                                return (
                                    <div key={i}>
                                        <ClientCard details={item.details} client={item.clientName} title={item.title} />
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
export default AboutPage;