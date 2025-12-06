import { Link, useLocation } from "react-router-dom";
import CustomFormik from "../../components/form/CustomFormik.jsx";
import AppInputField from "../../components/form/AppInputField.jsx";
import AppSubmitButton from "../../components/form/AppSubmitButton.jsx";
import { useNavigate } from "react-router-dom";
import { errorMessage, successMessage } from "../../utils/helper.js";
import {
  registerUser,
  resendVerifyAccountOTP,
  verifyAccount,
} from "../../api/index.js";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import OTPInputField from "../../components/form/OTPInputField.jsx";

const VerifyAccount = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [otp, setOtp] = useState("");
  const [isSubmitting, setisSubmitting] = useState(false);
  const [disabled, setdisabled] = useState(false);
  const onChange = (value) => setOtp(value);

  const history = useNavigate();
  const location = useLocation();
  const userId = location?.state?.userId || null;

  useEffect(() => {
    if (!userId) {
      history("/login");
    }
  }, []);

  let otpLength = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [minutes, seconds]);

  const resendOTP = async () => {
    const response = await resendVerifyAccountOTP({ userId });
    if (response?.status === 200) {
      successMessage("New OTP successfully sent!");
    } else {
      errorMessage(response?.data?.error);
    }
  };

  const handleSubmit = async () => {
    setisSubmitting(true);
    setdisabled(true);

    const response = await verifyAccount({
      otp: otp,
      userId,
    });
    console.log("response", response);
    if (response.status === 200) {
      Cookies.set("u-x", response?.headers["u-x-key"]);
      setTimeout(() => history("/dashboard"), 3000);
    } else {
      errorMessage(response?.data?.error);
    }
    setisSubmitting(false);
    setdisabled(false);
  };

  useEffect(() => {
    if (otp.length < otpLength) {
      setdisabled(true);
    } else {
      setdisabled(false);
    }
  }, [otp]);

  return (
    <div className="flex flex-col w-screen mt-[150px] mb-20 justify-center items-center">
      <div className=" flex flex-col gap-5 p-5 py-8 w-[30%] justify-center border border-[rgb(233,234,242)] text-custom-text items-center rounded-md    ">
        <div className="mt-5 flex flex-col items-center mb-3">
          <div className="font-medium text-lg">Verify your account</div>
          <div className="text-[15px]">
            Provide the OTP received via your email
          </div>
        </div>
        <div className="font-bold md:text-[18px] grid grid-cols-1 gap-8 md:grid-cols-1 w-full md:w-[80%] mx-auto mb-2">
          <OTPInputField
            name="otp"
            value={otp}
            valueLength={otpLength}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="mt-6 w-[100%] p-3 font-semibold rounded-md"
          disabled={disabled || isSubmitting ? true : false}
          style={{
            background: "#1447E5",
            color: "#fff",
            opacity: disabled || isSubmitting ? 0.7 : 1,
          }}
          onClick={handleSubmit}
        >
          {isSubmitting ? "Loading..." : "Verify Account"}
        </button>

        <div className="mt-[20px] w-full">
          {seconds > 0 || minutes > 0 ? (
            <div className="flex items-center text-sm">
              Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex text-sm">Didn&apos;t recieve code?</div>
              <div
                onClick={resendOTP}
                className=" font-semibold cursor-pointer text-sm underline"
              >
                Resend OTP
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default VerifyAccount;
