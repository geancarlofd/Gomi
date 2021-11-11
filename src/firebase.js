import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBPDWq0MymAWskOeSvKZZS1AX7fR4FmlNg",
    authDomain: "projetobsi-64d80.firebaseapp.com",
    databaseURL: "https://projetobsi-64d80-default-rtdb.firebaseio.com",
    projectId: "projetobsi-64d80",
    storageBucket: "projetobsi-64d80.appspot.com",
    messagingSenderId: "144741943911",
    appId: "1:144741943911:web:6456cd5da5f0270093e2c2",
    measurementId: "G-7TF4B2HS72"
};


firebase.initializeApp(firebaseConfig);


export default firebase;