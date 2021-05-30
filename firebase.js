import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyB7hCuxNngE5OSAy4MPPL4WAjbEjWhtymk",
    authDomain: "pizzeria-crud.firebaseapp.com",
    projectId: "pizzeria-crud",
    storageBucket: "pizzeria-crud.appspot.com",
    messagingSenderId: "717891780677",
    appId: "1:717891780677:web:14fd0a3cc2afc18658232c",
    measurementId: "G-0G9SDWFG3B"
};

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();

export { firebaseConfig, db };
