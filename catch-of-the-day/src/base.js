import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDNRtS-ysf3DndQJKIFZZuMpGM8hCkolY8",
    authDomain: "catch-of-the-day-1e9f8.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-1e9f8.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }

export default base;