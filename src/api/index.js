import useSWR from "swr";
import {
  CHECK_SESSION,
  LOGGED_IN_USER,
  LOGIN_USER,
  FORGOT_PASSWORD,
  SiGNUP_USER,
  VERIFY_EMAIL,
  CHECK_EMAIL,
  RESEND_VERIFICATION_OTP,
  FETCH_ALL_COURSES,
  RESET_PASSWORD,
} from "../constants/routes";

import { fetcher, sesionFetcher } from "./fetcher";
import { mutationRequest } from "./sender";

// Auth
export const registerUser = async (values) => {
  const result = await mutationRequest(SiGNUP_USER, "post", values);
  return result;
};
export const verifyAccount = async (values) => {
  const result = await mutationRequest(VERIFY_EMAIL, "post", values);
  return result;
};
export const resendVerifyAccountOTP = async (values) => {
  const result = await mutationRequest(RESEND_VERIFICATION_OTP, "post", values);
  return result;
};
export const loginUser = async (values) => {
  const result = await mutationRequest(LOGIN_USER, "post", values);
  return result;
};
export const checkSession = () => {
  const { data, error, loading, mutate } = useSWR(CHECK_SESSION, sesionFetcher);
  return { data, error, loading, mutate };
};

export const fetchLoggedInUser = () => {
  const { data, error, loading, mutate } = useSWR(LOGGED_IN_USER, fetcher);
  return { data, error, loading, mutate };
};

export const resetPassword = async (values) => {
  const result = await mutationRequest(RESET_PASSWORD, "post", values);
  return result;
};

export const forgetPasssword = async (values) => {
  const result = await mutationRequest(FORGOT_PASSWORD, "post", values);
  return result;
};

//public courses
export const fetchAllCourses = () => {
  const { data, error, loading, mutate } = useSWR(FETCH_ALL_COURSES, fetcher);
  return { data, error, loading, mutate };
};
