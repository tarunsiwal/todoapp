import React, { useState, useRef } from "react";

import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import ViewSidebarRoundedIcon from "@mui/icons-material/ViewSidebarRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import DynamicCalendarIcon from "./helper/dynamicCalendarIcon.js";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";

import Sidenavbtn from "./ui/sidenavbtn.js";

const Sidenav = (props) => {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const profilePic = props.userimg;
  const user = props.user;
  const clickbtn = () => {
    return alert("button click");
  };
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -1,
      top: 4,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
      background: "rgb(255, 193, 7)",
    },
  }));
  return (
    <Box>
      <Collapse
        orientation="horizontal"
        in={checked}
        style={{
          minWidth: checked ? "200px" : "0",
          transition: "min-width 0.3s ease",
          transitionBehavior: "normal",
        }}
      >
        <button
          className="btn btn-icon collapsed-btn"
          name="navigation-toggle"
          onClick={handleChange}
        >
          <TableChartOutlinedIcon
            style={{ zIndex: "100", transform: "rotate(270deg)" }}
          />
        </button>
        <div className="sidenav-main-container" id="navbarMainContainer">
          <nav className="sidenav">
            <div className="user-profile">
              <button className="btn" name="user">
                <div className="default-profilepic">
                  <PersonRoundedIcon
                    style={{
                      fontSize: "1.25rem",
                      top: "5px",
                      position: "absolute",
                    }}
                  />
                </div>
                <div className="btnTitle">{user}</div>
                <div className="btnIcon">
                  <KeyboardArrowDownRoundedIcon />
                </div>
              </button>

              <div className="user-sm-btn">
                <button
                  className="btn btn-icon"
                  name="notification"
                  style={{ margin: "0" }}
                  onClick={clickbtn}
                >
                  <StyledBadge badgeContent={0} color="secondary">
                    <NotificationsIcon />
                  </StyledBadge>
                </button>

                <button
                  className="btn btn-icon"
                  name="navigation-toggle"
                  onClick={handleChange}
                >
                  <TableChartOutlinedIcon
                    style={{ zIndex: "100", transform: "rotate(270deg)" }}
                  />
                </button>
              </div>
            </div>
            <div className="add-task">
              <Sidenavbtn dothis={clickbtn} title={"Add a task"}>
                <AddCircleRoundedIcon />
              </Sidenavbtn>
            </div>
            <div className="menu">
              <div className="menu-container">
                <Sidenavbtn dothis={clickbtn} title={"Search"}>
                  <SearchRoundedIcon />
                </Sidenavbtn>
                <Sidenavbtn dothis={clickbtn} title={"Inbox"}>
                  <InboxRoundedIcon />
                </Sidenavbtn>
                <Sidenavbtn dothis={clickbtn} title={"Today"}>
                  <DynamicCalendarIcon />
                </Sidenavbtn>
                <Sidenavbtn dothis={clickbtn} title={"Update"}>
                  <CalendarMonthRoundedIcon />
                </Sidenavbtn>
                <Sidenavbtn dothis={clickbtn} title={"Filters & Labels"}>
                  <GridViewRoundedIcon />
                </Sidenavbtn>
              </div>

              <div className="my-projects btn">
                <a href="">My Projects</a>
                <div className="innerbtn-container">
                  <div className="btn-icon">
                    <Sidenavbtn dothis={clickbtn} title={""}>
                      <AddRoundedIcon />
                    </Sidenavbtn>
                  </div>
                  <div className="btn-icon">
                    <Sidenavbtn dothis={clickbtn} title={""}>
                      <KeyboardArrowRightRoundedIcon />
                    </Sidenavbtn>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="add-a-team">
            <Sidenavbtn dothis={"#"} title={"add a team"}>
              <AddRoundedIcon />
            </Sidenavbtn>
          </div>
        </div>
      </Collapse>
    </Box>
  );
};

// const Sidenav = ({
//   setActiveView,
//   setIsModalOpen,
//   isCollapsed,
//   toggleCollapse,
// }) => {
//   // Use a conditional Tailwind class for the width based on the isCollapsed prop.
//   const sidenavWidth = isCollapsed ? "w-20" : "w-64";

//   return (
//     <div
//       className={`flex flex-col justify-between shadow-lg p-4 bg-white transition-all duration-300 ${sidenavWidth}`}
//     >
//       <div>
//         {/* Toggle button for collapsing/expanding the sidebar */}
//         <div className="flex items-center justify-between">
//           <h1
//             className={`text-2xl font-bold mb-6 text-gray-800 transition-opacity duration-300 ${
//               isCollapsed ? "opacity-0 absolute" : "opacity-100"
//             }`}
//           >
//             My Tasks
//           </h1>
//           <button
//             onClick={toggleCollapse}
//             className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200 mb-6"
//           >
//             <span className="text-xl">{isCollapsed ? "➡️" : "⬅️"}</span>
//           </button>
//         </div>

//         {/* Main Navigation - content is hidden when collapsed */}
//         <nav className="space-y-2">
//           <SidenavButton
//             onClick={() => setActiveView("inbox")}
//             label="Inbox"
//             icon="📦"
//             isCollapsed={isCollapsed}
//           />
//           <SidenavButton
//             onClick={() => setActiveView("today")}
//             label="Today"
//             icon="☀️"
//             isCollapsed={isCollapsed}
//           />
//           <SidenavButton
//             onClick={() => setActiveView("updates")}
//             label="Updates"
//             icon="🔄"
//             isCollapsed={isCollapsed}
//           />
//           <SidenavButton
//             onClick={() => setActiveView("search")}
//             label="Search"
//             icon="🔍"
//             isCollapsed={isCollapsed}
//           />
//         </nav>
//       </div>

//       {/* 'Add Task' Button */}
//       <div className="mt-4">
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="w-full flex items-center justify-center p-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200"
//         >
//           <span className="text-xl mr-2">+</span>
//           <span
//             className={`transition-opacity duration-300 ${
//               isCollapsed ? "opacity-0 absolute" : "opacity-100"
//             }`}
//           >
//             Add Task
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

export default Sidenav;
