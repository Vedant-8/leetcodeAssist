import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#FFD5CC" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            paddingLeft: 2,
            color: "black",
          }}
        >
          LeetcodeAssist
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
