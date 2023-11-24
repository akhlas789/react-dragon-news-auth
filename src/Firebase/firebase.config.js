// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYyEccShZjy9ZFWX1vXzOX_A3bTwJCN8A",
  authDomain: "react-gragon-news-auth.firebaseapp.com",
  projectId: "react-gragon-news-auth",
  storageBucket: "react-gragon-news-auth.appspot.com",
  messagingSenderId: "824337781815",
  appId: "1:824337781815:web:0d55c6f69838be58141bb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;