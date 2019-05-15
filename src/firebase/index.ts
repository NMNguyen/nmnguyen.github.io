import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = process.env.USE_PRODUCTION_DATABASE ?
    {
        // Production Keys:
        apiKey: "AIzaSyCphd7p-BHxKBj9Xaxk85ilcYYRm-HCC-Q",
        authDomain: "cloudjet-work.firebaseapp.com",
        databaseURL: "https://cloudjet-work.firebaseio.com",
        projectId: "cloudjet-work",
        storageBucket: "",
        messagingSenderId: "736915700044"
    } : {
        apiKey: "AIzaSyAmaUlIFpaBnzX45MYJ2LjVV7GrgTNti8E",
        authDomain: "just-landing-229509.firebaseapp.com",
        databaseURL: "https://just-landing-229509.firebaseio.com",
        projectId: "just-landing-229509",
        storageBucket: "just-landing-229509.appspot.com",
        messagingSenderId: "512260630417",
    };
firebase.initializeApp(config);

firebase.firestore().enablePersistence()
    .catch(function (err) {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
    });

export const db = firebase.firestore();
export const fauth = firebase.auth();
export const fstorage = firebase.storage();

import authError from './error/auth';
import FirestoreError from './error/firestore';
export const ERROR = {
    AUTH: authError,
    FIRESTORE: FirestoreError,
};
export default firebase;
