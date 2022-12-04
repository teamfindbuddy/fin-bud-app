import React, { useState } from "react";
import { PropTypes } from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Navbar from "../components/Navbar";

const drawerWidth = 240;

const PrivateLayout = (props) => {
  const { children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar handleDrawerOpen={handleDrawerClose} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` }
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </div>
  );
};

PrivateLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default PrivateLayout;
