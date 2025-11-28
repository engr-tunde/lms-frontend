import "../public/styles/global.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
// import Login from './pages/auth/Login';
// import AuthLayout from './layouts/AuthLayout';
import LandingPageLayout from "./layout/LandingPageLayout";
// import DashboardLayout from './layouts/DashbordLayout';
// import DashboardPage from './pages/dashboard/DashboardPage';
// import CouresPage from './pages/courses/CoursePage';
// import SignUp from './pages/auth/SingUp';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
             <Route path="/register" element={<SignUp />}/>
          </Route> */}
          {/* <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/courses" element={<CouresPage />} />
            <Route path="/" element={<RegisterPage />} />
          </Route> */}
          <Route element={<LandingPageLayout />}>
            <Route path="/" element={<HomePage/>} />
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
