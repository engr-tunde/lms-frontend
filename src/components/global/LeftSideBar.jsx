import { Link, useNavigate } from "react-router-dom";
import { sidebarData } from "../../utils/dataArr";
import * as FaIcons from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { logoutUser } from "../../api";
import Cookies from "js-cookie";
import { errorMessage } from "../../utils/helper";

const LeftsideBar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [, setShowExpenseModal] = useState(false);

  const history = useNavigate();

  const handleLogout = async () => {
    const response = await logoutUser();
    if (response.status === 200) {
      Cookies.remove("u-x");
      history("/login");
    } else {
      errorMessage(response?.data?.error);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-white p-3 overflow-y-hidden w-full border-r-2 border-r-[#e6e7eb87] text-[rgb(5,5,5)]">
      <Link to="/">
        <img
          src="/images/health-logo-1.svg"
          alt=""
          className="w-[70px] m-auto"
        />
      </Link>

      <div className="w-full flex flex-col ps-3 mt-10">
        {sidebarData?.map((item, index) => {
          const IconComponent = FaIcons[item.icon];
          const hasChildren = item.children && item.children.length > 0;
          const isOpen = openIndex === index;

          return (
            <div key={index} className="">
              <div
                className="flex items-center justify-between hover:text-primary-deep cursor-pointer"
                onClick={() =>
                  hasChildren && setOpenIndex(isOpen ? null : index)
                }
              >
                <Link
                  to={item?.link}
                  className="flex items-center gap-4 my-3 "
                  tabIndex={-1}
                  onClick={(e) => hasChildren && e.preventDefault()}
                >
                  <span className="text-[rgb(139,139,139)]">
                    {IconComponent ? <IconComponent /> : null}
                  </span>
                  <span className="hidden md:block text-[14px] font-light">
                    {item?.title}
                  </span>
                </Link>
                {hasChildren && (
                  <div className="ml-2 p-1 hover:text-[#ff7588] ">
                    {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowLeft />}
                  </div>
                )}
              </div>
              {hasChildren && isOpen && (
                <ul className="px-3 py-4 flex flex-col gap-4 bg-[#f8f9fa]  rounded-md mb-3 duration-200 ease-in">
                  {item.children.map((child, childidx) => (
                    <li key={childidx}>
                      {child.title === "Add Expense" ||
                      child.title === "Add Income" ? (
                        <button
                          onClick={() => setShowExpenseModal(true)}
                          className="text-[14px] text-gray-600 hover:text-[#ff7588] transition-all duration-50 hover:pl-4 w-full text-left"
                        >
                          {child.title}
                        </button>
                      ) : (
                        <Link
                          to={child.link}
                          className="text-[14px] text-gray-600 hover:text-[#ff7588] transition-all duration-50 hover:pl-4"
                        >
                          {child.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      <div
        className="mt-auto mb-10 flex items-center ml-3 gap-2 cursor-pointer"
        onClick={handleLogout}
      >
        <span className="">Logout</span>
        <FaIcons.FaSignOutAlt />
      </div>
      {/* <AddExpenseSideBarFormModal
        show={showExpenseModal}
        onClose={() => setShowExpenseModal(false)}
      /> */}
    </div>
  );
};

export default LeftsideBar;
