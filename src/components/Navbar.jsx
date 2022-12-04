// React imports
import React from "react";

// frontend imports
import { AppBar, Box, Hidden, Toolbar, Typography } from "@mui/material";
import NavbarProfileAvatar from "./NavbarProfileAvatar";
// import { useStyles } from "./HeaderStyle";

function Navbar({ handleDrawerOpen }) {
  const classes =" useStyles()";

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logo}>
          {"FINBUD"}
        </Typography>
        <Hidden smDown>
          <Box style={{ display: "flex" }}>
            <NavbarProfileAvatar />
          </Box>
        </Hidden>
        <Hidden smUp>
          <Box style={{ display: "flex" }}>
            <NavbarProfileAvatar />
          </Box>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
