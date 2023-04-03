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
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
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
