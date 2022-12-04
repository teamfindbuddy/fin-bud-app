import auth from "../../firebase";
import { signOut } from "firebase/auth";

function SignOut() {
  // todo: if auth null then goto error page
  signOut(auth);
}

export default SignOut;
