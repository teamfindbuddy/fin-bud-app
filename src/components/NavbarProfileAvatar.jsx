import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// frontend imports
import {
  Avatar,
  Box,
  Button,
  getIconButtonUtilityClass,
  ListItem,
  Menu,
  MenuItem
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import MenuIcon from "@mui/icons-material/Menu";

// page imports
import EditProfile from "../pages/EditProfile";
import MyProfile from "../pages/MyProfile";
// import { useStyles } from "./HeaderStyle";

// Database imports
import SignOut from "./DAO/SignOut";
import GetUserDetails from "./DAO/GetUserDetails";
import GetUserId from "./DAO/GetUserId";

function NavbarProfileAvatar() {
  const classes = "useStyles()";
  const [anchorEl, setAnchorEl] = useState(null);
  // const [mainUser, setMainUser] = useState([]);
  // const uid = GetUserId();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // async function getUserAvatar() {
  //   await GetUserDetails({ setMainUser: setMainUser, uid: uid });
  // }

  const navigate = useNavigate();
  // getUserAvatar();

  return (
    <Box>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={
          <MenuIcon
            style={{ color: "white" }}
            // src={mainUser[0] === undefined ? "" : mainUser[0].img}
            // className={classes.navAvatar}
          ></MenuIcon>
        }
      ></Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          component={ListItem}
          onClick={handleClose}
          style={{
            display: "flex",
            flexDirection: "column"
            // justifyContent: 'left'
          }}
        >
          <ListItem>
            <EditProfile />
          </ListItem>
          <ListItem>
            <Button
              onClick={(event) => {
                event.preventDefault();
                SignOut();
                navigate("/");
              }}
            >
              <LogoutIcon />
              &nbsp; Sign Out
            </Button>
          </ListItem>
          {/* <MyProfile /> */}
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default NavbarProfileAvatar;
