// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Your api key",
  authDomain: "estate-6c7c8.firebaseapp.com",
  projectId: "estate-6c7c8",
  storageBucket: "estate-6c7c8.appspot.com",
  messagingSenderId: "713149836716",
  appId: "1:713149836716:web:6581d7fa23e5b382a59e09",
  measurementId: "G-RWXL24CFDW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);