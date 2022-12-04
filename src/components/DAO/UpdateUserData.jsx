import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

async function UpdateUserData(props) {
  try {
    await updateDoc(doc(db, "users", props.userId), {
      name: props.mainUser[0].name,
      linkedin: props.mainUser[0].linkedin,
      about: props.mainUser[0].about,
      college: props.mainUser[0].college,
      website: props.mainUser[0].website,
      github: props.mainUser[0].github,
      twitter: props.mainUser[0].twitter,
      skills: props.mainUser[0].skills
    });
  } catch (err) {}
}

export default UpdateUserData;
