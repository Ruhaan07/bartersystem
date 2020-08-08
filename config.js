import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCXZjhXTq90ThsoIfKE-DIugSK33BJ4QG8",
  authDomain: "barter-system-32481.firebaseapp.com",
  databaseURL: "https://barter-system-32481.firebaseio.com",
  projectId: "barter-system-32481",
  storageBucket: "barter-system-32481.appspot.com",
  messagingSenderId: "986933788683",
  appId: "1:986933788683:web:e691360528c09a523e070e"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
