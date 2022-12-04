// React imports
import React, { useEffect, useState } from "react";

// Components file imports
import MainPageComponents from "../components/MainPageComponents";
import ErrorPage from "../components/ErrorPage";

// DB imports
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const Main = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return <div>{show ? <MainPageComponents /> : <ErrorPage />}</div>;
};

export default Main;
