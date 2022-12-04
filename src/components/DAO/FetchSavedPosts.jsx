import auth, { db } from "../../firebase";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";

async function FetchSavedPosts(props) {
  const uid = auth?.currentUser?.uid;

  if (uid !== undefined) {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    const saveList = docSnap.data().saveList;

    const posts = await getDocs(collection(db, "posts"));
    const savedArray = [];
    posts.docs.forEach((doc) => {
      if (saveList.includes(doc.id)) {
        savedArray.push({
          id: doc.id,
          pid: doc.id,
          uid: doc.data().uid,
          time: doc.data()?.datetime,
          project: doc.data().project,
          work: doc.data().work,
          exp: doc.data().exp,
          req: doc.data().req,
          benefits: doc.data().benefits
        });
      }
    });

    props.setPosts(savedArray);
  }
}

async function CheckIfPostIsSaved(props) {
  const uid = auth?.currentUser?.uid;
  if (uid !== undefined) {
    const postId = props.postId;
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    const saveList = docSnap.data().saveList;

    // Save is Empty
    if (saveList === undefined || saveList.length === 0) {
      return;
    }

    const posts = await getDocs(collection(db, "posts"));
    let isPresent = true;
    posts.docs.forEach((doc) => {
      if (saveList.includes(doc.id)) {
        const pid = doc.id;
        if (pid === postId) {
          isPresent = false;
        }
      }
    });

    props.setSave(isPresent);
  }
}

export default FetchSavedPosts;

export { CheckIfPostIsSaved };
