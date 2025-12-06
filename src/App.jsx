import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/auth/Login";
import AuthLayout from "./layout/AuthLayout";
import LandingPageLayout from "./layout/LandingPageLayout";
import AboutPage from "./pages/about/AboutPage";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import Register from "./pages/auth/register";
import CoursePage from "./pages/course/coursePage";
import VerifyAccount from "./pages/auth/verify-account";
import { ToastContainer } from "react-toastify";

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
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify-account" element={<VerifyAccount />} />
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
