import React from "react";
import Paper from "@mui/material/Paper";

const Footer = () => {
  return (
    <Paper
      elevation={3}
      square
      sx={{
        position: "bottom",
        bottom: 0,
        width: "100%",
        height: "50px",
        backgroundColor: "#D1CCFF",
        textAlign: "center",
        lineHeight: "50px", // Centering content vertically
      }}
    >
      © {new Date().getFullYear()} Made by Vedant Kulkarni. All rights reserved.
    </Paper>
  );
};

export default Footer;
