// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBAng9--RlYkJI8gh5MlE0uIHySYPqtthI",
//   authDomain: "myportfolio-9d733.firebaseapp.com",
//   projectId: "myportfolio-9d733",
//   storageBucket: "myportfolio-9d733.appspot.com",
//   messagingSenderId: "429659382992",
//   appId: "1:429659382992:web:9c27c59aab108ecbea2ad5",
// };

// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// export { db };
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA-m8aFSX69LFlsAP6Q9Heo9XbKwtAIoKA",
  authDomain: "portfolio-363321.firebaseapp.com",
  projectId: "portfolio-363321",
  storageBucket: "portfolio-363321.appspot.com",
  messagingSenderId: "212244342463",
  appId: "1:212244342463:web:c337f2bea41dccefc4880a",
  measurementId: "G-BBC470TDD7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
