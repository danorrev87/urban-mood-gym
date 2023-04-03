import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBl1hLvPTWg13tMYq0jXnanw_4i5cyPYvY",
  authDomain: "urbanmood-daeb1.firebaseapp.com",
  projectId: "urbanmood-daeb1",
  storageBucket: "urbanmood-daeb1.appspot.com",
  messagingSenderId: "142392976774",
  appId: "1:142392976774:web:a83f2dbe9393d7d0a87807",
  measurementId: "G-YZRSF7EDD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
