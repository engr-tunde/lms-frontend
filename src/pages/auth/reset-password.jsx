import { resetUserValues } from "../../utils/InitialValues";
import { validateResetPassword } from "../../utils/validationSchema";
import { resetPassword } from "../../api";
import { Link, useLocation } from "react-router-dom";
import CustomFormik from "../../components/form/CustomFormik";
import AppSubmitButton from "../../components/form/AppSubmitButton";
import AppInputField from "../../components/form/AppInputField.jsx";
import { errorMessage, successMessage } from "../../utils/helper.js";

const ResetPasswordPage = () => {
  const initialValues = resetUserValues();
  const validationSchema = validateResetPassword();
  const location = useLocation();
  const userId = location?.state?.userId || null;
  const token = location?.state?.token || null;

  const handleSubmit = async (values) => {
    const response = await resetPassword({
      values,
      token,
      userId,
    });
    console.log("RPresponse", response);
    if (response?.status === 200) {
      Cookies.set("u-x", response?.headers["user-x-key"]);
      infoMessage(response?.data?.message);
    } else {
      errorMessage(response?.data?.error);
    }
  };
  return (
    <div className="flex flex-col w-screen mt-[150px] mb-20 justify-center items-center">
      <div className=" flex flex-col gap-5 p-2 py-8 w-[30%] justify-center border border-[rgb(233,234,242)] text-custom-text items-center rounded-md    ">
        <div className="mt-5 flex flex-col items-center mb-3 w-full">
          <div className="font-medium text-lg">Reset Password</div>
          <div className="text-[15px]">input your new password</div>
          <CustomFormik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col w-full gap-5 mt-10 justify-center items-center">
              <div className="flex flex-col gap-px text-xs w-[90%] h-[35px]">
                <AppInputField name="password" placeholder="Password*" />
              </div>
              <div className="flex flex-col gap-px text-xs w-[90%] h-[35px]">
                <AppInputField
                  name="confirmPassword"
                  placeholder="Password(confirm)*"
                />
              </div>

              <div className="w-[90%] mt-2">
                <AppSubmitButton title="Rest Password" />
              </div>
            </div>
          </CustomFormik>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
