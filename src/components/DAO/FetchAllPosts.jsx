import { db } from "../../firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore";

async function FetchAllPosts(props) {
  const currPosts = [];

  const q = query(collection(db, "posts"), orderBy("datetime", "desc"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    currPosts.push({
      id: doc.id,
      pid: doc.id,
      uid: doc.data().uid,
      time: doc.data()?.datetime,
      project: doc.data()?.project,
      work: doc.data().work,
      exp: doc.data().exp,
      req: doc.data().req,
      benefits: doc.data().benefits
    });
  });

  props.setPosts(currPosts);
}

export default FetchAllPosts;
