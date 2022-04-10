import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCupQQTr1_0ogZmN62RyN-9H8zVOL8MypQ",
	authDomain: "first-app-bbee0.firebaseapp.com",
	projectId: "first-app-bbee0",
	storageBucket: "first-app-bbee0.appspot.com",
	messagingSenderId: "822695247146",
	appId: "1:822695247146:web:b0d716f2b81a319bff3253",
	measurementId: "G-PQD9VT13P9"
};

// initialized firebase
const firebaeApp = firebase.initializeApp(firebaseConfig);

// data base
const db = firebaeApp.firestore();

// auth
const auth = firebase.auth;

export { auth };

export default db;
