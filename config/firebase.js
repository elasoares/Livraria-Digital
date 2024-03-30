// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRuUcZckz4rRHB45dVdyhlu3Ut7JYqXxk",
  authDomain: "livraria-digital-5e7cf.firebaseapp.com",
  databaseURL: "https://livraria-digital-5e7cf-default-rtdb.firebaseio.com",
  projectId: "livraria-digital-5e7cf",
  storageBucket: "livraria-digital-5e7cf.appspot.com",
  messagingSenderId: "111251304097",
  appId: "1:111251304097:web:77ac9b06b502cdab774ae0",
  measurementId: "G-R2EFFN68X6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
