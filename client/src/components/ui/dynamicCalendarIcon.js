import React from "react";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import { Box, Typography } from "@mui/material";

const DynamicCalendarIcon = ({ day }) => {
  return (
    <Box
      position="relative"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      align-items="center"
    >
      <CalendarTodayRoundedIcon style={{ fontSize: "1.3rem" }} />
      <Box position="absolute" top={"1.7px"}>
        <Typography variant="caption" fontWeight="bold" fontSize={"0.6rem"}>
          {day}
        </Typography>
      </Box>
    </Box>
  );
};

export default DynamicCalendarIcon;
