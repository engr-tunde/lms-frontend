import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex justify-center z-50 shadow-md shadow-transparent py-10 bg-[rgb(32,34,48)] text-white">
      <div className="flex  justify-center w-[90%]">
        <div className="flex flex-col gap-10 justify-center items-center w-full">
          <div className="grid grid-cols-2 lg:grid-cols-5 justify-between container gap-10 lg:gap-0">
            <div className="col-span-2 flex flex-col items-center lg:items-start w-full gap-3">
              <div className="flex border border-white rounded-md h-[45px] w-[350px] leading-2.5">
                <div className="h-full w-[65%]">
                  <input type="text" className="h-full w-full" />
                </div>
                <div className="h-full w-[35%] bg-primary-deep flex justify-center text-xl font-normal text-center items-center">
                  Subscribe
                </div>
              </div>
              <p className="font-thin">
                Stay updated with our latest news and offers. <br /> By
                subscribing, you agree to our Privacy Policy
              </p>
            </div>
            <div className="col-span-1 flex flex-col gap-2  items-start">
              <h3 className="text-lg font-medium">About Us</h3>
              <Link to="" className="font-thin">
                Contact
              </Link>
              <Link to="" className="font-thin">
                Support
              </Link>
              <Link to="" className="font-thin">
                Our Service
              </Link>
              <Link to="" className="font-thin">
                Testimonials
              </Link>
            </div>
            <div className="col-span-1 flex flex-col gap-2  items-start">
              <h3 className="text-lg font-medium">Courses</h3>
              <Link to="" className="font-thin">
                Available Courses
              </Link>
              <Link to="" className="font-thin">
                Careers
              </Link>
              <Link to="" className="font-thin">
                Resourses
              </Link>
              <Link to="" className="font-thin">
                Events
              </Link>
            </div>
            <div className="col-span-1 flex flex-col gap-2  items-start">
              <h3 className="text-lg font-medium">Terms & Help</h3>
              <Link to="" className="font-thin">
                Privacy Policy
              </Link>
              <Link to="" className="font-thin">
                Terms of Service
              </Link>
              <Link to="" className="font-thin">
                Assesibility
              </Link>
              <Link to="" className="font-thin">
                Help Center
              </Link>
            </div>
          </div>
          <div className="border-t-[0.5px] border-white w-full pt-6 p-3">
            <div className="flex flex-col gap-2 justify-center items-center">
              <h3 className="company-name tracking-widest">
                {import.meta.env.VITE_APP_NAME}
              </h3>
              <p className="Copyright">
                Copyright &copy; 2025, © 2025. All rights reserved
              </p>
              <div className="flex gap-4">
                <Link to="#" className="text-white">
                  <FaXTwitter />
                </Link>
                <Link to="#" className="text-white">
                  <CiYoutube />
                </Link>
                <Link to="#" className="text-white">
                  <ImFacebook />
                </Link>
                <Link to="#" className="text-white">
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
