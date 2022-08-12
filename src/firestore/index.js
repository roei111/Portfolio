import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVwHyrfK99NKo6B8RfKln_u16B0oJRXuw",
  authDomain: "roei-yaacobi-portfolio.firebaseapp.com",
  projectId: "roei-yaacobi-portfolio",
  storageBucket: "roei-yaacobi-portfolio.appspot.com",
  messagingSenderId: "164831592043",
  appId: "1:164831592043:web:cf5d70c0a4a4dae7ba7b2e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(auth);

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