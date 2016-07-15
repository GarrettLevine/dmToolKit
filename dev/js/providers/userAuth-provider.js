import firebase from 'firebase';

// Initialize Firebase
var config = {
 apiKey: "AIzaSyBOMPPiPG9n7hqSw316PNM_JlGwzrCTkLE",
 authDomain: "dmtoolkit-a0ab9.firebaseapp.com",
 databaseURL: "https://dmtoolkit-a0ab9.firebaseio.com",
 storageBucket: "dmtoolkit-a0ab9.appspot.com",
};

firebase.initializeApp(config);

//CREATE NEW USER
export function createUser(email, password) {
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .catch( (error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

//SIGN IN USER
export function signInUser(email, password) {
  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .catch( (error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}
