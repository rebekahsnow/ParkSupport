import firebase from 'firebase/app'
import 'firebase/analytics'

const firebaseConfig = {
        apiKey: "AIzaSyAXgcceaiFcMf4ni0sR1FR-mKYnGgh_BUk",
    authDomain: "park-support.firebaseapp.com",
    projectId: "park-support",
    storageBucket: "park-support.appspot.com",
    messagingSenderId: "876322139699",
    appId: "1:876322139699:web:302fa622ddf3f50496fd46",
    measurementId: "G-21SCX6VLKL"
};
firebase.initializeApp(firebaseConfig)
firebase.analytics();

export {

}