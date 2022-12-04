import auth from "../../firebase";

function GetUserId() {
  // todo: if auth is null then redirect to error page
  return auth?.currentUser?.uid;
}

export default GetUserId;
