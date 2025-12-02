import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full  flex justify-center z-50 shadow-md shadow-transparent py-5 bg-[rgb(32,34,48)] h-[450px] text-white">
            <div className="flex  justify-center items-center w-[90%]">
                <div className="flex flex-col gap-4 justify-center items-center w-full">
                    <div className="flex justify-between p-1 w-full">
                        <div className="flex flex-col h-[]">
                            <h3 className="text-2xl font-medium">Subscribe to Newsletter</h3>
                            <p className="text-xl">Stay updated with our latest news and offers</p>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            <div className="flex border border-white rounded-md h-[55px] w-[450px]">
                                <div className="h-full w-[65%]"><input type="text" className="h-full w-full" /></div>
                                <div className="h-full w-[35%] bg-primary-deep flex justify-center text-xl font-normal text-center items-center">Subscribe</div>
                            </div>
                            <p className="text-end">By subscribing, you agree to our Privacy Policy</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center p-1 w-full gap-5">
                        <div className="flex justify-between items-center w-[70%]">
                            <div><img src="" alt="" /></div>
                            <div className=" flex flex-col gap-2  items-start">
                                <h3 className="text-xl font-medium">About Us</h3>
                                <Link to="">Contact</Link>
                                <Link to="">Support</Link>
                                <Link to="">Our Service</Link>
                                <Link to="">Testimonials</Link>
                            </div>
                            <div className=" flex flex-col gap-2  items-start">
                                <h3 className="text-xl font-medium">Courses</h3>
                                <Link to="">Available Courses</Link>
                                <Link to="">Careers</Link>
                                <Link to="">Resourses</Link>
                                <Link to="">Events</Link>
                            </div>
                            <div  className=" flex flex-col gap-2  items-start">
                                <h3 className="text-xl font-medium">Terms & Help</h3>
                                <Link to="">Privacy Policy</Link>
                                <Link to=""> Terms of Service</Link>
                                <Link to="">Assesibility</Link>
                                <Link to="">Help Center</Link>
                            </div>
                        </div>
                    </div>
                    <div className="border-t-2 border-white w-full p-3">
                        <div className="flex flex-col gap-2 justify-center items-center">
                            <h3 class="company-name tracking-widest">LANCLUB</h3>
                            <p class="Copyright" >Copyright &copy; 2025, © 2025 Lanklub. All rights reserved</p>
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