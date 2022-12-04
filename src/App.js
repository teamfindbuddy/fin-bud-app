import "./styles.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./pages/Main";
import EditProfile from "./pages/EditProfile";
import MyProfile from "./pages/MyProfile";
import ForgetPassword from "./pages/ForgetPassword";
import SnackBarProvider from "./contexts/SnackBarProvider";

export default function App() {
  return (
    <div className="App">
      <SnackBarProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main" element={<Main />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </SnackBarProvider>
    </div>
  );
}
