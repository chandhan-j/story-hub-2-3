import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyBqL-YLRrECEO33hBq8iyX9pM3LbgUhRaw",
  authDomain: "story-hub-projects-database.firebaseapp.com",
  databaseURL: "https://story-hub-projects-database.firebaseio.com",
  projectId: "story-hub-projects-database",
  storageBucket: "story-hub-projects-database.appspot.com",
  messagingSenderId: "73523893216",
  appId: "1:73523893216:web:bc16d8710917a0bd791185"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();