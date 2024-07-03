// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADUKqQRRTxp3j4Cn-fq5NyQkN7XCxb_R4",
  authDomain: "doc-plus-59aea.firebaseapp.com",
  projectId: "doc-plus-59aea",
  storageBucket: "doc-plus-59aea.appspot.com",
  messagingSenderId: "546793395805",
  appId: "1:546793395805:web:b56bef0918ddb097275fb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;