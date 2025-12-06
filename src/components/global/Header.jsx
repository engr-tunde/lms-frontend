import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Header = ({ auth, landPage }) => {
  return (
    <div className="w-full flex justify-center fixed z-50  shadow-md shadow-transparent bg-white">
      <div className="flex justify-between items-center h-[ 80px] w-[90%] py-2 bg-white ">
        <img src="/images/health-logo.svg" alt="" className="w-[150px]" />
        <div className="flex gap-10 justify-between font-light text-[17px]">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/course">Courses</Link>
          <Link to="/contact">Contact</Link>
        </div>
        {/* <Link to="/login" className={auth ? "p-3 bg-[rgb(254,194,0)] text-black text-3xl rounded-md items-center" : "hidden" }>Enroll Now</Link> */}
        <div className={"flex gap-5 justify-center items-center "}>
          <Link
            to="/login"
            className=" font-medium px-4.5 py-1.5 bg-white text-primary-deep text-[14px] rounded-md border border-primary-deep"
          >
            Log in
          </Link>
          <Link
            to="register"
            className="text-[14px] cursor-pointer font-medium px-4 py-2 bg-primary-deep text-white rounded-md"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
