// React imports
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// DB Imports
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase";

// Frontend imports
import { Button, Paper, Grid, TextField, Avatar } from "@mui/material";
import LockResetRoundedIcon from "@mui/icons-material/LockResetRounded";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function forgotPassword(Email) {
    sendPasswordResetEmail(auth, Email)
      .then(function () {
        alert("Please check your email...");
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
        alert(error.message);
      });
  }
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 350,
    margin: "20px auto"
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockResetRoundedIcon />
            </Avatar>
            <h2>Forget Password</h2>
          </Grid>
          <TextField
            variant="standard"
            required
            label="Email"
            size="small"
            style={{ marginTop: "10px" }}
            fullWidth
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="text"
            placeholder="Email"
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              style={{ marginTop: "10px" }}
              variant="contained"
              onClick={(event) => {
                event.preventDefault();
                forgotPassword(email);
              }}
            >
              Reset Password
            </Button>
            <br />
            <Button
              variant="contained"
              style={{ marginTop: "10px", marginLeft: "10px" }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Go back
              </Link>
            </Button>
          </div>
        </Paper>
      </Grid>
    </div>
  );
}

export default ForgetPassword;
