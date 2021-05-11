import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCQhAcNVsynTjQM83-3m_yaa4Zc0Nl2MnY",
  authDomain: "codi-cb7d8.firebaseapp.com",
  projectId: "codi-cb7d8",
  storageBucket: "codi-cb7d8.appspot.com",
  messagingSenderId: "158228485817",
  appId: "1:158228485817:web:2eb6cd00c30c1aed116d68",
  measurementId: "G-RJFTLEV7P5"
};


var app = firebase.initializeApp(firebaseConfig);


export {
    app
}