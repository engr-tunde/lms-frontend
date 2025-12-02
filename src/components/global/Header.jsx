import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Header = ({auth, landPage}) => {

    return (
        <div className="w-full flex justify-center fixed z-50  shadow-md shadow-transparent bg-white">
            <div className="flex justify-between items-center h-[ 80px] w-[90%] py-2 bg-white ">
                <img src="/images/health-logo.svg" alt="" className="w-[150px]" />
                <div className="flex w-[30%] justify-between font-semibold text-lg">
                    <Link to="/">Home</Link>
                    <Link to="">About</Link>
                    <Link to="">Courses</Link>
                    <Link to="">Counter</Link>
                </div>
                {/* <Link to="/login" className={auth ? "p-3 bg-[rgb(254,194,0)] text-black text-3xl rounded-md items-center" : "hidden" }>Enroll Now</Link> */}
                <div className={auth ? "flex gap-5 justify-center items-center " : "hidden"}>
                    <Link to="/login" className=" font-medium px-4.5 py-1.5 bg-white text-primary-deep text-[14px] rounded-md border border-primary-deep">Log in</Link>
                    <Link to="register" className="text-[14px] cursor-pointer font-medium px-4 py-2 bg-primary-deep text-white rounded-md">Sign Up</Link>
                </div>
            </div>
        </div>
    )
}
export default Header;