// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app';
import 'firebase/auth'

const app=firebase.initializeApp({
    apiKey: "AIzaSyDhykBp250u_H2NWFzHSb6RBk0_25_kstU",
    authDomain: "react-firebase-3563a.firebaseapp.com",
    databaseURL: "https://react-firebase-3563a.firebaseio.com",
    projectId: "react-firebase-3563a",
    storageBucket: "react-firebase-3563a.appspot.com",
    messagingSenderId: "273603415137",
    appId: "1:273603415137:web:82240c9ec2393a9fc02e20",
    measurementId: "G-4JP2VC4BTD"
  })

export const authapp=firebase.auth()