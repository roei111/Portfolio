import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { useEffect } from "react";
import { auth } from "../../firestore";

var ui = new firebaseui.auth.AuthUI(auth);

const SignIn = () => {
  useEffect(() => {
    console.log("useEffect");
    ui.start("#firebaseui-auth-container", {
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          disableSignUp: {
            status: true,
          },
        },
      ],
    });
  }, []);
  return <div id="firebaseui-auth-container"></div>;
};

export default SignIn;
