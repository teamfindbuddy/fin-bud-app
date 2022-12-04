import auth, { db } from "../../firebase";
import { doc, updateDoc, arrayUnion, arrayRemove } from "@firebase/firestore";

async function AddPostIdToSaveList(props) {
  const userId = auth.currentUser.uid;
  if (userId !== undefined) {
    const userData = doc(db, "users", userId);
    const postId = props?.postId;
    await updateDoc(userData, {
      saveList: arrayUnion(postId)
    });
  }
}

async function RemovePostIdToSaveList(props) {
  const userId = auth.currentUser.uid;
  if (userId !== undefined) {
    const userData = doc(db, "users", userId);
    const postId = props?.postId;
    await updateDoc(userData, {
      saveList: arrayRemove(postId)
    });
  }
}

export default AddPostIdToSaveList;
export { RemovePostIdToSaveList };
