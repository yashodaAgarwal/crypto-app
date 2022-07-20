import firebaseConfig from "./config/firebaseConfig";
import {getAuth} from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {getFirestore} from "firebase/firestore"
import {initializeApp} from "firebase/app"

const  firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

export {auth,db};