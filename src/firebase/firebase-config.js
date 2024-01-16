import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCb9TAOxMPMEGeK89vLCYJwqYZoG0WduU",
  authDomain: "monkey-bogging.firebaseapp.com",
  projectId: "monkey-bogging",
  storageBucket: "monkey-bogging.appspot.com",
  messagingSenderId: "821180785992",
  appId: "1:821180785992:web:bcb79b7f0292e699afff7d",
};

const app = initializeApp(firebaseConfig);

export const bd = getFirestore(app);

export const auth = getAuth(app);
