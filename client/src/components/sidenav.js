import React from "react";
import Sidenavbtn from "./ui/sidenavbtn.js";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ViewSidebarRoundedIcon from "@mui/icons-material/ViewSidebarRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import DynamicCalendarIcon from "./ui/dynamicCalendarIcon.js";

const Sidenav = (props) => {
  const date = new Date().getDate();
  const currentDay = date.toString().padStart(2, "0");
  const profilePic = props.userimg;
  const user = props.user;
  // const handlenavtoggle = () => {
  //   const navContainer = document.getElementById("navbarMainContainer");
  //   navContainer.clientWidth = "0";
  //   navContainer.clientLeft = "-300px";
  // };
  return (
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
            >
              <NotificationsIcon />
            </button>
            <button
              className="btn btn-icon"
              name="navigation-toggle"
              style={{ margin: "0" }}
            >
              <ViewSidebarRoundedIcon />
            </button>
          </div>
        </div>
        <div className="add-task">
          <Sidenavbtn dothis={"#"} title={"Add a task"}>
            <AddCircleRoundedIcon />
          </Sidenavbtn>
        </div>
        <div className="menu">
          <div className="menu-container">
            <Sidenavbtn dothis={"#"} title={"Search"}>
              <SearchRoundedIcon />
            </Sidenavbtn>
            <Sidenavbtn dothis={"#"} title={"Inbox"}>
              <InboxRoundedIcon />
            </Sidenavbtn>
            <Sidenavbtn dothis={"#"} title={"Today"}>
              <DynamicCalendarIcon day={currentDay} />
            </Sidenavbtn>
            <Sidenavbtn dothis={"#"} title={"Update"}>
              <CalendarMonthRoundedIcon />
            </Sidenavbtn>
            <Sidenavbtn dothis={"#"} title={"Filters & Labels"}>
              <GridViewRoundedIcon />
            </Sidenavbtn>
          </div>

          <div className="my-projects btn">
            <a href="#">My Projects</a>
            <div className="innerbtn-container">
              <div className="btn-icon">
                <Sidenavbtn dothis={"#"} title={""}>
                  <AddRoundedIcon />
                </Sidenavbtn>
              </div>
              <div className="btn-icon">
                <Sidenavbtn dothis={"#"} title={""}>
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
  );
};

export default Sidenav;
