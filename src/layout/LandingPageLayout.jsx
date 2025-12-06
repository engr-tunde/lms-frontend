import Header from "../components/global/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/global/Footer";

const LandingPageLayout = () => {
  return (
    <div className="w-screen flex flex-col overflow-y-hidden ">
      {/* header side */}
      <div className="">
        <Header auth />
      </div>
      {/* main side */}
      <div className="w-full flex flex-col gap-1">
        <Outlet />
      </div>
      {/* footer side */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
};
export default LandingPageLayout;
