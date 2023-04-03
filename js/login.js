import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js';

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

async function init() {
  const auth = getAuth();

  // Get DOM elements
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginButton = document.getElementById("login");
  const message = document.getElementById("message");

  // Attach click event listener to the login button
  loginButton.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    // Authenticate the user using Firebase
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User signed in:", user);
        window.location.href = "main.html"; // Redirect to the main page
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error:", errorCode, errorMessage);
        message.textContent = errorMessage;
      });
  });
}

init();
