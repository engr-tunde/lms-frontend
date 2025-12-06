import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AuthLayout from "./layout/AuthLayout";
import LandingPageLayout from "./layout/LandingPageLayout";
import AboutPage from "./pages/about/AboutPage";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import CoursePage from "./pages/course/coursePage";
import { ToastContainer } from "react-toastify";
import SignupPage from "./pages/auth/signup";
import SigninPage from "./pages/auth/signin";
import VerifyAccountPage from "./pages/auth/verify-account";

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
          </Route>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            {/* <Route path="/courses" element={<CouresPage />} /> */}
            {/* <Route path="/" element={<RegisterPage />} /> */}
          </Route>
          <Route element={<LandingPageLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/course" element={<CoursePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
