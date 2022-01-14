import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD7bWcSLTze9AISn5-06cZ8R4_j6MWzqpg",
    authDomain: "weather-api-926ea.firebaseapp.com",
    projectId: "weather-api-926ea",
    storageBucket: "weather-api-926ea.appspot.com",
    messagingSenderId: "8702725531",
    appId: "1:8702725531:web:a341b0bfd4e1a50d3be53e",
    measurementId: "G-TTT250TFZY"
};

export const app = firebase.initializeApp(firebaseConfig);

export default firebase;
