
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import { Outlet } from "react-router-dom";
import { checkSession } from "../api";
import { useEffect } from "react";

const AuthLayout = () => {
   const { data } = checkSession();
  useEffect(() => {
    if (data) {
      window.location.replace("/dashboard");
    }
  }, [data]);

    return (

    <div className="w-screen flex flex-col gap-8 overflow-y-hidden">
      {/* header side */}
      <div className= "" >
        <Header />
      </div>
      {/* main side */}
      <div className="w-full flex flex-col gap-1">
        <Outlet />
      </div>
      {/* footer side */}
      <div className= "">
        <Footer />
      </div>
    </div>
)
    
}

export default AuthLayout