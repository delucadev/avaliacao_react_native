import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBXbw4scxEe9qujVhxXfqo__SsYs4ReTNw",
    authDomain: "avaliacaoreactnative.firebaseapp.com",
    projectId: "avaliacaoreactnative",
    storageBucket: "avaliacaoreactnative.appspot.com",
    messagingSenderId: "126092907997",
    appId: "1:126092907997:web:f17bc5b4f29576df57d234"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
} 

export default firebase;
