import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

async function GetUserDetails(props) {
  const uid = props.uid;
  // console.log(uid);
  const userData = [];

  if (uid === undefined) {
    return;
  }

  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    userData.push({
      name: docSnap?.data()?.name,
      img: docSnap?.data()?.img,
      email: docSnap?.data()?.email,
      linkedin: docSnap?.data()?.linkedin,
      about: docSnap?.data()?.about,
      college: docSnap?.data()?.college,
      website: docSnap?.data()?.website,
      github: docSnap?.data()?.github,
      twitter: docSnap?.data()?.twitter,
      skills: docSnap?.data()?.skills
    });
  } else {
    console.log("No such document!");
  }

  if (userData.length !== 0) {
    props.setMainUser(userData);
  }
}

export default GetUserDetails;
