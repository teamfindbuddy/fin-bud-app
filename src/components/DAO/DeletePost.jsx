import { db } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";

function DeletePost(props) {
  const pid = props?.pid;
  const docRef = doc(db, "posts", pid);

  deleteDoc(docRef)
    .then(() => {
      console.log("Entire Document has been deleted successfully.");
    })
    .catch((error) => {
      console.log(error);
    });
}

export default DeletePost;
