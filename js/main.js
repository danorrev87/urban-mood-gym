import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';
import { getAuth, signOut } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js';

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
const auth = getAuth();
const db = getFirestore();

function logout() {
  console.log('Logout button clicked');
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

// Get products from Firestore and display them on the page
getDocs(collection(db, "products")).then((querySnapshot) => {
  const productsContainer = document.querySelector(".main-container");

  querySnapshot.forEach((doc) => {
    const product = doc.data();

    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <button>Agregar al carrito</button>
    `;

    const addButton = productCard.querySelector("button");
    addButton.addEventListener("click", function() {
      console.log(`Added ${product.name} to cart`);
    });

    productsContainer.appendChild(productCard);
  });
}).catch((error) => {
  console.error(error);
});

const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  // Add more image paths if needed
];

const animatedImage = document.getElementById("animated-image");
let currentImageIndex = 0;

function updateImage() {
  animatedImage.src = images[currentImageIndex];
  animatedImage.style.opacity = 0;
  setTimeout(() => {
    animatedImage.style.opacity = 1;
  }, 100);
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateImage();
}

// Initial image update
updateImage();

// Change images every 5 seconds
setInterval(nextImage, 5000);
