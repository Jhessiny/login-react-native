import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDcMAhQvL5dg3jJWt3gdcUIl3izD8Afnwo",
  authDomain: "newproject-af7b2.firebaseapp.com",
  databaseURL: "https://newproject-af7b2.firebaseio.com",
  projectId: "newproject-af7b2",
  storageBucket: "newproject-af7b2.appspot.com",
  messagingSenderId: "151037881888"
};
const fire = firebase.initializeApp(config);
export default fire;
