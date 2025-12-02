import { Outlet } from "react-router-dom";
import LeftsideBar from "../components/global/LeftSideBar";
import NavBar from "../components/global/NavBar";
import { useState } from "react";
// import { fetchLoggedInAdmin } from "../api";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
//   const { data, loading } = fetchLoggedInAdmin();
  // useEffect(() => {
  //   if (!loading && !data) {
  //     window.location.replace("/login");
  //   }
  // }, [data]);
  return (
    <div className="flex w-screen min-h-screen gap-3 overflow-y-hidden bg-[]">
      {/* left side */}
      <div className={`${sidebarOpen ? "block" : "hidden"} flex w-[16%]   `}>
        <LeftsideBar />
      </div>
      {/* right side */}
      <div className="w-full flex flex-col gap-1">
        {/* navbar side */}
        <NavBar
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        //   data={data?.data}
        />
        {/* main  */}
        <div className=" p-3 lg:p-5 min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;