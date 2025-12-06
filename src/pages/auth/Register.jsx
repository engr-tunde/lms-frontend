import { Link } from "react-router-dom";
import CustomFormik from "../../components/form/CustomFormik";
import AppInputField from "../../components/form/AppInputField";
import AppSubmitButton from "../../components/form/AppSubmitButton";
import { validateRegister } from "../../utils/validationSchema";
import { registerUserValues } from "../../utils/InitialValues";
import { useNavigate } from "react-router-dom";
// import { validateInputValue } from "../../utils/validationSchema";
// import { addInputValue } from "../../components/form/InitialValues";

const Register = () => {
     const initialValues = registerUserValues();
    const validationSchema = validateRegister();
   const history = useNavigate();
    return (
        <div className="flex flex-col w-screen mt-[150px] justify-center items-center">
            
            <CustomFormik
                // onSubmit={handleSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
            >
                <div className=" flex flex-col gap-5 p-5 py-8 w-[30%] justify-center border border-[rgb(233,234,242)] text-custom-text items-center rounded-md    ">
                    <div className="mt-5 ">
                        <div className="flex gap-5 justify-center items-center p-2 bg-white shadow-[1px_1px_2px_1px_#000c0275]">
                            <div><img src="/images/1-googleicon.svg" alt="" /></div>
                            <div>Continue with Google</div>
                        </div>
                        <div className="flex gap-2 justify-center items-center mt-5">
                            <div className="bg-custom-text h-px w-[150px]"></div>
                            <div>OR</div>
                            <div className="bg-custom-text h-px w-[150px]"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-px text-xs w-[90%] h-[35px]">
                        <AppInputField name="fullName" placeholder="Full Name*" />
                    </div>
                    <div className="flex flex-col gap-px text-xs w-[90%] h-[35px]">
                        <AppInputField name="emailAddress" placeholder="Email*"  />
                    </div>
                    <div className="flex flex-col gap-px text-xs w-[90%] h-[35px]">
                        <AppInputField name="password"  placeholder="Password*" />
                    </div>
                    <div className="flex flex-col gap-px text-xs w-[90%] h-[35px]">
                        <AppInputField name="confirmPassword"  placeholder="Password(confirm)*"                              />
                    </div>
                    <div className="w-[90%]"><AppSubmitButton
                        title="Sign Up"
                        /></div>
                    <div className="flex flex-col gap-3 justify-center items-center pt-3 text-custom-text border-t border-custom-text w-[90%]">
                        <div className="">Already have an account?<Link to="/register" className="text-custom-title ml-2" >log in</Link></div>
                    </div>
                </div>
            </CustomFormik>
        </div>
    )


}
export default Register;