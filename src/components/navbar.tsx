import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#000000" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            fontFamily: "sans-serif",
            fontSize: "1.5rem",
            paddingLeft: 2,
          }}
        >
          LeetcodeAssist
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
