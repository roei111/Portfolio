import { useState } from "react";
import SignIn from "./SignIn";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firestore";
import AdminForm from "./AdminForm";
import { Button, Container } from "@mui/material";

const Admin = () => {
  console.log("current user:", auth.currentUser);
  const [loggedInUser, setLoggedInUser] = useState(auth.currentUser);
  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setLoggedInUser(user);
    } else {
      // User is signed out
      // ...
      setLoggedInUser(null);
    }
  });

  const logOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("signed out");
      })
      .catch((error) => {
        // An error happened.
        console.log("signed out error", error.message);
      });
  };
  console.log("logged in user:", !!loggedInUser);
  return (
    // <Container maxWidth="sm">
      loggedInUser ? (
        <>
          <Button variant="contained" onClick={logOutHandler}>
            Log Out
          </Button>
          <AdminForm />
        </>
      ) : (
        <SignIn />
      )
    // </Container>
  );
};

export default Admin;
