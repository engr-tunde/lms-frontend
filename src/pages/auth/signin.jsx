import { Link } from "react-router-dom";
import CustomFormik from "../../components/form/CustomFormik";
import AppInputField from "../../components/form/AppInputField";
import AppSubmitButton from "../../components/form/AppSubmitButton";
import { loginUserValues } from "../../utils/InitialValues";
import { validateLogin } from "../../utils/validationSchema";
import { useNavigate } from "react-router-dom";
import { loginUser, resendVerifyAccountOTP } from "../../api";
import { errorMessage, infoMessage, successMessage } from "../../utils/helper";
import Cookies from "js-cookie";

const SigninPage = () => {
  const initialValues = loginUserValues();
  const validationSchema = validateLogin();
  const history = useNavigate();

  const handleSubmit = async (values) => {
    const response = await loginUser(values);
    console.log(response)
    if (response?.status === 200) {
      console.log("response", response)
      if (response.data.message === "Unverified email") {
        const verifyAccountCodeResponse = await resendVerifyAccountOTP({
          userId: response?.data?.userId,
        });
        if (verifyAccountCodeResponse?.status === 200) {
          infoMessage("Verify your account first. Check email for OTP!");
          setTimeout(
            () =>
              history("/verify-account", {
                state: { userId: response?.data?.userId },
              }),
            1500
          );
        } else {
          errorMessage(response?.data?.error);
        }
      } else {
        successMessage(response.data.message);
        Cookies.set("u-x", response?.headers["u-x-key"]);
        history("/dashboard");
      }
    } else {
      errorMessage(response?.data?.error);
    }
  };

  return (
    <div className="flex flex-col w-screen mt-[150px] justify-center items-center">
      <CustomFormik
        // onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className=" flex flex-col gap-3 p-5 py-8 w-[30%] justify-center border border-[rgb(233,234,242)] text-custom-text items-center rounded-md    ">
          <div className="mt-5 ">
            <div className="flex gap-5 justify-center items-center p-2 bg-white shadow-[1px_1px_2px_1px_#000c0275]">
              <div>
                <img src="/images/1-googleicon.svg" alt="" />
              </div>
              <div>Continue with Google</div>
            </div>
            <div className="flex gap-2 justify-center items-center mt-5">
              <div className="bg-custom-text h-px w-[150px]"></div>
              <div>OR</div>
              <div className="bg-custom-text h-px w-[150px]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-px text-xs w-[90%] h-[35px] ">
            <AppInputField name="email" placeholder="Email*" />
          </div>
          <div className="flex flex-col gap-px w-[90%] text-xs h-[35px]">
            <AppInputField
              name="password"
              placeholder="*****"
              type="password"
            />
          </div>
          <Link to="/forget-password" className="w-[90%] mt-0.5 cursor-pointer"><p className="text-custom-text text-end text-sm font-medium">Forget Password ?</p></Link>
          <div className="w-[90%] mt-2">
            <AppSubmitButton title="login" />
          </div>
          <div className="flex flex-col gap-3 justify-center items-center pt-3 text-custom-text border-t border-custom-text w-[90%]">
            <div className="">
              Don't have an account?
              <Link to="/register" className="text-custom-title ml-2">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </CustomFormik>
    </div>
    // <div className="w-screen flex flex-col">
    //     <div className="flex flex-col gap-4 w-full mt-[150px] justify-center items-center p-5">
    //         <p className="text-2xl font-medium">Login</p>
    //         <p>Login to your account now</p>
    //         <div className="flex flex-col w-[400px] h-[300px] bg-[rgb(21,112,187)] text-white rounded-md justify-center items-center">
    //             <div className="flex flex-col w-[300px] gap-2">
    //                 <div className="w-full "><input type="text"  className="w-full rounded-md h-full bg-[rgb(39,143,228)] p-3 placeholder-white" placeholder="Username/Email"/></div>
    //                 <div className="w-full rounded-md"><input type="password" className="w-full  h-full rounded-md bg-[rgb(43,145,240)] p-3 placeholder-white" placeholder="Password*" /></div>
    //             </div>
    //             <Link to="" className="text-end mt-3">Forget Password? </Link>
    //             <div className="w-[300px] bg-[rgb(254,194,0)] flex justify-center items-center rounded-md mt-3 text-black">Login</div>
    //             <Link className="text-end mt-3">Don't have an account? Sign up</Link>
    //         </div>
    //     </div>
    // </div>
  );
};
export default SigninPage;
