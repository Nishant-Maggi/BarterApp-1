import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyC7HhwWLA0KcZfd25-cSSERpPL9XqNHQIk",
    authDomain: "barterapp-df15a.firebaseapp.com",
    projectId: "barterapp-df15a",
    storageBucket: "barterapp-df15a.appspot.com",
    messagingSenderId: "1088999980439",
    appId: "1:1088999980439:web:b3e34dd28bff5895ab98d2"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();