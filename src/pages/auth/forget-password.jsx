import CustomFormik from "../../components/form/CustomFormik";
import { loginUserValues } from "../../utils/InitialValues";
import AppInputField from "../../components/form/AppInputField";
import AppSubmitButton from "../../components/form/AppSubmitButton";
import { forgetPasssword } from "../../api";
import Cookies from "js-cookie";
import { errorMessage, infoMessage, successMessage } from "../../utils/helper";

const ForgetPasswordPage = () => {
  const initialValues = loginUserValues();

  const handleSubmit = async (values) => {
    const response = await forgetPasssword(values);
    console.log("FPresponse", response);
    if (response?.status === 200) {
      Cookies.set("u-x", response?.headers["user-x-key"]);
      infoMessage(response?.data?.message);
    } else {
      errorMessage(response?.data?.error);
    }
  };
  return (
    <div className="flex flex-col w-screen mt-[150px] mb-20 justify-center items-center">
      <div className=" flex flex-col gap-5 p-5 py-8 w-[30%] justify-center border border-[rgb(233,234,242)] text-custom-text items-center rounded-md    ">
        <div className="mt-5 flex flex-col items-center mb-3">
          <div className="font-medium text-lg">Forget Password</div>
          <div className="text-[15px]">
            Enter Your Registered Email Address or Username
          </div>
          <CustomFormik initialValues={initialValues} onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-3 mt-10 justify-center items-center">
              <div className="flex flex-col gap-px text-xs w-[90%] h-[35px] ">
                <AppInputField name="email" placeholder="Email*" />
              </div>
              <div className="w-[90%] mt-2">
                <AppSubmitButton title="Next" />
              </div>
            </div>
          </CustomFormik>
        </div>
      </div>
    </div>
  );
};
export default ForgetPasswordPage;
