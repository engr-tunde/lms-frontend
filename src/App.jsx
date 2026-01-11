import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import AuthLayout from "./layout/AuthLayout";
import LandingPageLayout from "./layout/LandingPageLayout";
import AboutPage from "./pages/about/AboutPage";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardPage from "./pages/dashboard";
import CoursePage from "./pages/courses";
import { ToastContainer } from "react-toastify";
import SignupPage from "./pages/auth/signup";
import SigninPage from "./pages/auth/signin";
import VerifyAccountPage from "./pages/auth/verify-account";
import ForgetPasswordPage from "./pages/auth/forget-password";
import ResetPasswordPage from "./pages/auth/reset-password";
import SingleProductPage from "./pages/courses/[id]";
import userCoursePage from "./pages/dashboard/courses";
import UserCoursePage from "./pages/dashboard/courses";
import ContactPage from "./pages/contact";
import UserProfile from "./pages/dashboard/userProfile";

// import CouresPage from './pages/courses/CoursePage';
// import SignUp from './pages/auth/SingUp';

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<SigninPage />} />
            <Route path="/register" element={<SignupPage />} />
            <Route path="/verify-account" element={<VerifyAccountPage />} />
            <Route path="/forget-password" element={<ForgetPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
          </Route>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/courses" element={<UserCoursePage />} />
            <Route path="/dashboard/profile" element={<UserProfile />} />
            {/* <Route path="/courses" element={<CouresPage />} /> */}
            {/* <Route path="/" element={<RegisterPage />} /> */}
          </Route>
          <Route element={<LandingPageLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} /> 
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursePage />} />
            <Route path="/courses/:id" element={<SingleProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
