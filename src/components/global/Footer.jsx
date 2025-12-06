import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full  flex justify-center z-50 shadow-md font-[stack] shadow-transparent py-5 bg-[rgb(32,34,48)] h-[320px] text-white">
            <div className="flex  justify-center w-[90%]">
                <div className="flex flex-col gap-4 justify-center items-center w-full">
                    <div className="flex  justify-center items-center p-3 w-full gap-5">
                        <div className="grid grid-cols-5 justify-between w-[90%]">
                            <div className="flex flex-col p-1 w-full col-span-2">
                                <div className="flex flex-col mb-2.5">
                                    <h3 className="text-xl font-semibold leading-2.5">Subscribe to Newsletter</h3>
                                    <p className="text-lg">Stay updated with our latest news and offers</p>
                                </div>
                                <div className="flex flex-col justify-center items-start gap-2 leading-2.5">
                                    <div className="flex border border-white rounded-md h-[45px] w-[350px] leading-2.5">
                                        <div className="h-full w-[65%]"><input type="text" className="h-full w-full" /></div>
                                        <div className="h-full w-[35%] bg-primary-deep flex justify-center text-xl font-normal text-center items-center">Subscribe</div>
                                    </div>
                                    <p className="text-end">By subscribing, you agree to our Privacy Policy</p>
                                </div>
                            </div>
                            <div className=" flex flex-col gap-2  items-start">
                                <h3 className="text-lg font-semibold">About Us</h3>
                                <Link to="" className="font-light ">Contact</Link>
                                <Link to="">Support</Link>
                                <Link to="">Our Service</Link>
                                <Link to="">Testimonials</Link>
                            </div>
                            <div className=" flex flex-col gap-2  items-start">
                                <h3 className="text-lg font-semibold">Courses</h3>
                                <Link to="">Available Courses</Link>
                                <Link to="">Careers</Link>
                                <Link to="">Resourses</Link>
                                <Link to="">Events</Link>
                            </div>
                            <div  className=" flex flex-col gap-2  items-start">
                                <h3 className="text-lg font-semibold">Terms & Help</h3>
                                <Link to="">Privacy Policy</Link>
                                <Link to=""> Terms of Service</Link>
                                <Link to="">Assesibility</Link>
                                <Link to="">Help Center</Link>
                            </div>
                        </div>
                    </div>
                    <div className="border-t-[0.5px] border-white w-full p-3">
                        <div className="flex flex-col gap-2 justify-center items-center">
                            <h3 className="company-name tracking-widest">LANCLUB</h3>
                            <p className="Copyright" >Copyright &copy; 2025, © 2025 Lanklub. All rights reserved</p>
                            <div className="flex gap-4">
                                <Link to="#" className="text-white"><FaXTwitter /></Link>
                                <Link to="#" className="text-white"><CiYoutube /></Link>
                               <Link to="#" className="text-white"><ImFacebook /></Link>
                                <Link to="#" className="text-white"><FaInstagram /></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )

}
export default Footer;