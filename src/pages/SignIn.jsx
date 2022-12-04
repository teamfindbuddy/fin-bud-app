// react imports
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// DB imports
import auth from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

// frontend imports
import {
  Paper,
  Grid,
  InputAdornment,
  Box,
  TextField,
  Typography,
  Avatar
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Lock";
import ToastContext from "../contexts/ToastContext";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    showPassword: false
  });
  const snackBar = useContext(ToastContext);

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function Login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const currentUser = auth.currentUser;
      const displayName = currentUser.displayName;
      if (displayName === null) {
        navigate("/editprofile");
      } else {
        navigate("/main");
      }
      console.log("Login Successful");
      snackBar("Sign In successfully", "success");
    } catch (err) {
      console.error(err);
      // alert(err.message);
      snackBar(`Sign In unsuccessfully ${err}`, "error");
      setIsLoading(false);
    }
  }
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 350,
    margin: "20px auto"
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0", marginTop: "10px" };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <EmailIcon sx={{ color: "action.active", mr: 1 }} />
            <TextField
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              type="text"
              label="Email"
              fullWidth
              variant="standard"
              required
              placeholder="Email"
            />
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "flex-end", marginTop: "10px" }}
          >
            <PasswordIcon sx={{ color: "action.active", mr: 1 }} />
            <TextField
              fullWidth
              required
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              type={values.showPassword ? "text" : "password"}
              label="Password"
              variant="standard"
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
          </Box>
          <LoadingButton
            loading={isLoading}
            style={btnstyle}
            type="submit"
            fullWidth
            variant="contained"
            onClick={(event) => {
              event.preventDefault();
              Login(email, password);
              setIsLoading(true);
            }}
          >
            Sign In
          </LoadingButton>
          <Typography>
            <Link
              to="/forgetpassword"
              style={{ textDecoration: "none", color: "red" }}
            >
              Forgot password ?
            </Link>
          </Typography>
          <Typography>
            {" "}
            Do you have an account ?
            <Link to="/signup" style={{ textDecoration: "none", color: "red" }}>
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}
export default SignIn;
