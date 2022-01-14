import firebase from "../firebaseConfig";
import { auth } from "./authServices";


const getAllCities = async (setCities) => {
    const snapshot = await firebase.firestore().collection("users").doc(auth.currentUser.uid).collection("cities").get();
    const allCities = snapshot.docs.map(doc => {
        return doc.data();
    });
    setCities(allCities);
}
const addCity = (city) => {
    firebase.firestore().collection("users").doc(auth.currentUser.uid)
        .collection("cities").doc(city).set({"city" : city});
}
const deleteCity = (city) => {
    firebase.firestore().collection("users").doc(auth.currentUser.uid)
        .collection("cities").doc(city).delete()
}
export{
    getAllCities,
    addCity,
    deleteCity
}