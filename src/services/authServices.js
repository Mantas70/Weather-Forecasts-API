import firebase from "firebase"
import {app} from "../fireBaseConfig"

const auth = app.auth();
const db = app.firestore()

const loginWithEmailPassword = async (email,password, setErrMessage) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch(err) {
        setErrMessage(err.message)
    }
}

const registerWithEmailPassword = async (name, email, password) =>{
    try {
        const rez = await auth.createUserWithEmailAndPassword(email, password);
        const user = rez.user;
        await db.collection("users").doc(user.uid).set({
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
    } catch (err) {
        console.log(err);
    }
}

export{
    auth,
    db,
    loginWithEmailPassword,
    registerWithEmailPassword
}