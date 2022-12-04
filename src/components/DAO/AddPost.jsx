import auth, { db } from "../../firebase";
import firebase from "firebase/compat/app";

async function addPost(post) {
  try {
    const user = auth.currentUser;
    const id = db.collection("posts").doc().id;
    db.collection("posts")
      .doc(id)
      .set({
        pid: id,
        uid: user.uid,
        project: post.project,
        work: post.work,
        req: post.req,
        exp: post.exp,
        benefits: post.benefits,
        datetime: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

export default addPost;
