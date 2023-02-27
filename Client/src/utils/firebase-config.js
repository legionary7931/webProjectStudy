import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyB88Zy6t-QC7KCqdFG1u0968KIN1Lr8S40",
    authDomain: "phone-auth-63550.firebaseapp.com",
    projectId: "phone-auth-63550",
    storageBucket: "phone-auth-63550.appspot.com",
    messagingSenderId: "102174186861",
    appId: "1:102174186861:web:570291b072b2406c454e64",
    measurementId: "G-4FDL4B1NS3"
}

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);