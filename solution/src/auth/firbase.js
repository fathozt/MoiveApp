import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const logInUser = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toastSuccessNotify("Logged in successfully!");
    navigate("/");
  } catch (error) {
    toastErrorNotify(error.message);
  }
};

export const createUser = async (email, password, navigate, displayName) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("asad");
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/");
    toastSuccessNotify("Registered successfully!");
  } catch (error) {
    toastErrorNotify(error.message);
  }
};

export const logOutUser = async () => {
  try {
    sessionStorage.removeItem("user");
    signOut(auth);
    toastSuccessNotify("Logged out successfully!");
  } catch (error) {
    toastErrorNotify(error.message);
  }
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
      sessionStorage.setItem("user", JSON.stringify(user));
    } else {
      setCurrentUser(false);
    }
  });
};

export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then(() => {
      toastSuccessNotify("Logged in successfully!");
      navigate("/");
    })
    .catch((error) => {
      console.log(error.message);
    });
};
