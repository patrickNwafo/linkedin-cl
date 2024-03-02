import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBJ7mY5pfl033UHReVDcEmZXGBKSvbAjlk",
    authDomain: "linkedin-clone-fb80f.firebaseapp.com",
    projectId: "linkedin-clone-fb80f",
    storageBucket: "linkedin-clone-fb80f.appspot.com",
    messagingSenderId: "985014849676",
    appId: "1:985014849676:web:1877fcc83f745d886baba9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };