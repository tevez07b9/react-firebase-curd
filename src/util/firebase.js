import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCKyoC9zQHz8mr0BxtdLJA3JwcBY2b46FQ",
  authDomain: "reactcrud-6fb1c.firebaseapp.com",
  databaseURL: "https://reactcrud-6fb1c.firebaseio.com",
  projectId: "reactcrud-6fb1c",
  storageBucket: "reactcrud-6fb1c.appspot.com",
  messagingSenderId: "83299056670",
  appId: "1:83299056670:web:dff1969171380f5a6cc20f",
  measurementId: "G-DFSP7GDX6X",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
