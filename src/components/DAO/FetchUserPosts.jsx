import auth, { db } from "../../firebase";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";

// current user's posts
async function FetchUserPosts(props) {
  const currPosts = [];
  const uid = auth.currentUser.uid;

  const q = query(
    collection(db, "posts"),
    where("uid", "==", uid),
    orderBy("datetime", "desc")
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    currPosts.push({
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
  });

  props.setPosts(currPosts);
}

export default FetchUserPosts;
