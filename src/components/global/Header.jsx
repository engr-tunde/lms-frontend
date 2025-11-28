import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Header = ({auth, landPage}) => {

    return (
        <div className="w-full flex justify-center fixed z-50  shadow-md shadow-transparent bg-white">
            <div className="flex justify-between items-center h-[ 80px] w-[90%] py-5 bg-white ">
                <img src="/images/health-logo.svg" alt="" className="w-[150px]" />
                <div className="flex w-[50%] justify-between font-semibold text-xl">
                    <Link to="/">Home</Link>
                    <Link to="">About</Link>
                    <Link to="">Courses</Link>
                    <Link to="">Counter</Link>
                </div>
                <Link to="/login" className={auth ? "p-3 bg-[rgb(254,194,0)] text-black text-3xl rounded-md items-center" : "hidden" }>Enroll Now</Link>
                <div className={!auth ? "flex gap-3 justify-center items-center" : "hidden"}>
                    <Link to="/login" className="text-xl">Log in</Link>
                    <div className="flex gap-2 justify-center items-center p-1 bg-[rgb(254,194,0)] text-black text-xl rounded-md ">
                        <Link to="register">Sign Up</Link>
                        <div><CgProfile /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;