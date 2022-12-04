// React imports
import React, { useState } from "react";

// DB imports
import auth, { db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification
} from "firebase/auth";

// Frontend imports
import {
  Button,
  Paper,
  Grid,
  InputAdornment,
  TextField,
  Avatar
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import { TextfieldEmail } from "../constant";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [values, setValues] = useState({
    showPassword: false
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // for sign up with email link
  async function Register() {
    if (confirmPassword !== password) {
      alert("Password != Confirm Password");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        sendEmailVerification(auth.currentUser).then(() => {
          auth.signOut();
          alert("Email sent");
        });
        const uid = userCredential.user.uid;
        db.collection("users").doc(uid).set({
          uid: userCredential.user.uid,
          email: auth.currentUser.email,
          name: "",
          linkedin: "",
          img: "",
          about: "",
          college: "",
          website: "",
          github: "",
          twitter: "",
          skills: ""
        });
      })
      .catch(alert);
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
              <LockIcon />
            </Avatar>
            <h2>Register</h2>
          </Grid>
          <TextField
            size="small"
            variant="standard"
            fullWidth
            required
            label="Email"
            style={TextfieldEmail}
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="text"
            placeholder="Email"
          />
          <TextField
            style={{ marginTop: "15px" }}
            size="small"
            variant="standard"
            fullWidth
            required
            label="Password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            type={values.showPassword ? "text" : "password"}
            placeholder="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <TextField
            style={{ marginTop: "15px" }}
            size="small"
            variant="standard"
            fullWidth
            required
            label="Confirm Password"
            onChange={(event) => setConfirmPassword(event.target.value)}
            value={confirmPassword}
            type={values.showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px"
            }}
          >
            <Button
              variant="contained"
              onClick={(event) => {
                Register();
                event.preventDefault();
              }}
            >
              Register
            </Button>
            <Button style={{ marginLeft: "10px" }} variant="contained">
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
export default SignUp;
