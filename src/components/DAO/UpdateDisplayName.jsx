import auth from "../../firebase";
import { updateProfile } from "firebase/auth";

async function UpdateDisplayName(props) {
  await updateProfile(auth.currentUser, {
    displayName: props.name
  })
    .then(() => {})
    .catch((error) => {});
}

export default UpdateDisplayName;
