import React, { useState, useRef, useEffect } from "react";

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
import PoupContainer from "./ui/poupContainer.js";
import "../assets/css/popup.css";

const Sidenav = (props) => {
  const [checked, setChecked] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const profilePic = props.userimg;
  const user = props.user;
  const clickbtn = () => {
    return alert("button click");
  };

  const handleAddTaskClick = () => {
    setIsPopupOpen(true);
  };

  const addTask = async ({ title, description, dueDate }) => {
    try {
      // We are using a POST request to create a new todo on the server
      const response = await fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title, // Map the title from the form to the 'text' field on the backend
          description: description, // Also send the description
          dueDate: dueDate,
        }),
      });
      console.log(response);

      if (!response.ok) {
        throw new Error("Failed to add todo");
      }
      setIsPopupOpen(false);
      if (props.onTaskAdded) {
        props.onTaskAdded();
      }
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
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
                {/* <button
                  className="btn btn-icon"
                  name="notification"
                  style={{ margin: "0" }}
                  onClick={clickbtn}
                >
                  <StyledBadge badgeContent={0} color="secondary">
                    <NotificationsIcon />
                  </StyledBadge>
                </button> */}

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
              <Sidenavbtn dothis={handleAddTaskClick} title={"Add a task"}>
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
      <PoupContainer
        trigger={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onAddTask={addTask}
      />
    </Box>
  );
};

export default Sidenav;
