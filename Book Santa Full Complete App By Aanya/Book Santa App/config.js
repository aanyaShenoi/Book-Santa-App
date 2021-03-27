import * as firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBqVK8wpdJh24BrybfJdcKYW43iftnkyHg",
  authDomain: "book-santa-402a4.firebaseapp.com",
  projectId: "book-santa-402a4",
  storageBucket: "book-santa-402a4.appspot.com",
  messagingSenderId: "751392081350",
  appId: "1:751392081350:web:29b8cbc632379e2daddec7"
};

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();

