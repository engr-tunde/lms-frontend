import { Outlet } from "react-router-dom";
import LeftsideBar from "../components/global/LeftSideBar";
import NavBar from "../components/global/NavBar";
import { useEffect, useState } from "react";
import { fetchUserData } from "../api";
// import { fetchLoggedInAdmin } from "../api";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { data, loading } = fetchUserData();

  return (
    <div className="flex w-screen min-h-screen gap-3 overflow-y-hidden bg-[]">
      {/* left side */}
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } flex w-[16%] h-screen sticky top-0`}
      >
        <LeftsideBar />
      </div>
      {/* right side */}
      <div className="w-full flex flex-col gap-1 ">
        {/* navbar side */}
        <NavBar
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
          data={data?.data}
        />
        {/* main  */}
        <div className=" p-3 lg:p-5 min-h-screen overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
