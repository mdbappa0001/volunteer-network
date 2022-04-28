// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-CBQ3Gy8RGCbDN_sc5vy8_2Hb_PlZBd0",
  authDomain: "volunteer-network-22edf.firebaseapp.com",
  projectId: "volunteer-network-22edf",
  storageBucket: "volunteer-network-22edf.appspot.com",
  messagingSenderId: "1037094491535",
  appId: "1:1037094491535:web:2b3dd83df9944b4a1be7fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;