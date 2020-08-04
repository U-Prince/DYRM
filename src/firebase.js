import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBiGs5AXzgQVBC6VPSS0hs_nU2Yq4l8f2c",
    authDomain: "tinder-clone-ab21e.firebaseapp.com",
    databaseURL: "https://tinder-clone-ab21e.firebaseio.com",
    projectId: "tinder-clone-ab21e",
    storageBucket: "tinder-clone-ab21e.appspot.com",
    messagingSenderId: "938246373954",
    appId: "1:938246373954:web:9ff08528b76997d28f23db",
    measurementId: "G-MVHD8EL1X6"
};    

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;