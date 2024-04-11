import React from "react";
import Paper from "@mui/material/Paper";

const Footer = () => {
  return (
    <Paper
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        backgroundColor: "#000000",
        color: "#ffffff",
        fontSize: "1rem",
        padding: 2,
      }}
    >
      © {new Date().getFullYear()} Made by Vedant Kulkarni. All rights reserved.
    </Paper>
  );
};

export default Footer;
