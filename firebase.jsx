import React from 'react';
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDB70yJLYweAzOwIOyaffyQAoPc8h0aDFY",
  authDomain: "anivermessanger.firebaseapp.com",
  projectId: "anivermessanger",
  storageBucket: "anivermessanger.appspot.com",
  messagingSenderId: "594647824797",
  appId: "1:594647824797:web:073f3424f783a8267f5774",
  measurementId: "G-9NF24FNTCJ",
});

const db = firebaseApp.firestore();

export default db;
