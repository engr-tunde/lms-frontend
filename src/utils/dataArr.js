export const sidebarData = [
  {
    title: "Dashboard",
    // icon: "FaHouseUser",
    icon: "FaTachometerAlt",
    link: "/dashboard",
  },

  {
    title: "Assignment",
    icon: "FaBook",
    // icon: "FaHouseUser",
    link: "",
    children: [
      {
        title: "in progress",
        link: "/in-progress",
      },
      {
        title: "Completed",
        link: "/Completed",
      }
    ],
  },
  {
    title: "Certificate",
    link: "/Certificate",
    icon: "FaCertificate",
    
  },
  {
    title: "Old Certificate",
    icon: "FaCertificate",
    // icon: "FaCertificate",
    link: "/Old-Certificate",
  },
  {
    title: "Policy Manuals",
    icon: "FaShoppingBag",
    // icon: "FaHouseUser",
    link: "/Policy-Manuals",
    
  },
  {
    title: "Subscription",
    icon: "FaShoppingBag",
    // icon: "FaHouseUser",
    link: "/supplier",
    
  },
  {
    title: "Courses",
    icon: "FaBook",
    // icon: "FaHouseUser",
    link: "/courses",
  },
   
  {
    title: "Logout",
    icon: "FaShoppingBag",
    // icon: "FaHouseUser",
    link: "/Logout",
  },
];


export const adminMenuDropdown = [
  {
    title: "Profile",
    link: "/profile",
    icon: "FaUserCircle",
  },
  {
    title: "Settings",
    link: "/settings",
    icon: "FaCog",
  },
  // {
  //   title: "My Transactions",
  //   link: "/my-transactions",
  //   icon: "FaExchangeAlt",
  // },
];

export const courseContent = [
  {
    cost:"$69",
    title:"8 Hour Initial Administrator Training",
    details:"Meets TX HHSC Requirement §558.259(c) for HCSSAs. HHS Approved 8 hours of required pre-appointment clock hours for all license types including PAS, home health and hospice Administrators/Alternate Administrators.",
    image:"courses-instructor.jpg",
    instructorName: "Steven James",
    positon:"instructor",
     action:"Enrol Now"

  },
  {
    cost:"$79",
    title:"10 Hour Initial Administrator Training",
    details:"Meets TX HHSC Requirement §558.259(c) for HCSSAs. HHS Approved 8 hours of required pre-appointment clock hours for all license types including PAS, home health and hospice Administrators/Alternate Administrators.",
    image:"courses-instructor.jpg",
    instructorName: "Steven James",
    positon:"instructor",
    action:"Enrol Now"

  },
  {
    cost:"$89",
    title:"12 Hour Initial Administrator Training",
    details:"Meets TX HHSC Requirement §558.259(c) for HCSSAs. HHS Approved 8 hours of required pre-appointment clock hours for all license types including PAS, home health and hospice Administrators/Alternate Administrators.",
    image:"courses-instructor.jpg",
    instructorName: "Steven James",
    positon:"instructor",
     action:"Enrol Now"

  },
]

export const briefContent = [
  {
    cost:"$69",
    title:"8 Hour Initial Administrator Training",
    details:"Meets TX HHSC Requirement §558.259(c) for HCSSAs. HHS Approved 8 hours of required pre-appointment clock hours for all license types including PAS, home health and hospice Administrators",
    
  },
  {
    cost:"$79",
    title:"10 Hour Initial Administrator Training",
    details:"Meets TX HHSC Requirement §558.259(c) for HCSSAs. HHS Approved 8 hours of required pre-appointment clock hours for all license types including PAS, home health and hospice Administrators.",
    
  },
  {
    cost:"$89",
    title:"12 Hour Initial Administrator Training",
    details:"Meets TX HHSC Requirement §558.259(c) for HCSSAs. HHS Approved 8 hours of required pre-appointment clock hours for all license types including PAS, home health and hospice Administrators",
    
  },
  {
    cost:"$89",
    title:"12 Hour Initial Administrator Training",
    details:"Meets TX HHSC Requirement §558.259(c) for HCSSAs. HHS Approved 8 hours of required pre-appointment clock hours for all license types including PAS, home health and hospice Administrators",
    
  },
]

export const dashboardCards = [
  {
    counts: 0,
    title: "In progress course",
    details: "More Info",
    className: "bg-[rgb(21,112,187)]"
  },
  {
    counts: 0,
    title: "Completed",
    details: "More Info",
    className: "bg-[rgb(254,194,0)]"
  },
  {
    counts: 0,
    title: "certificates",
    details: "More Info",
    className: "bg-[rgb(21,112,187)]"
    // rgb(255,193,7)
  },
  {
    counts: 0,
    title: "polocies",
    details: "More Info",
    className: "bg-[rgb(254,194,0)]"
  },
]
