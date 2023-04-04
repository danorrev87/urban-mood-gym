import { getAuth, signOut } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';

// Get Firebase authentication object
const auth = getAuth();

// Logout function
function logout() {
  // Sign out the user
  signOut(auth)
    .then(() => {
      // Redirect to login page
      window.location.replace("login.html");
    })
    .catch((error) => {
      console.error(error);
    });
}

// Add event listener to logout button
const logoutBtn = document.getElementById('logout');
if (logoutBtn) {
  logoutBtn.addEventListener('click', logout);
}
