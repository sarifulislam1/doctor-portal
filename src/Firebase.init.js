// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_APIKEY,
//     authDomain: process.env.REACT_APP_AUTHDOMAIN,
//     projectId: process.env.REACT_APP_PROJECTID,
//     storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//     appId: process.env.REACT_APP_APPID,
// };

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAryda8Rvd0jNOyf0GvFCGobeGlj8BVI4g",
    authDomain: "doctor-portal-cab85.firebaseapp.com",
    projectId: "doctor-portal-cab85",
    storageBucket: "doctor-portal-cab85.appspot.com",
    messagingSenderId: "1005547824614",
    appId: "1:1005547824614:web:d8201f09239b8a8aae6227"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth