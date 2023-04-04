import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';
import { getAuth, signOut } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js';
import { shuffle } from 'https://cdn.skypack.dev/lodash-es';

import anime from 'https://cdn.skypack.dev/animejs';

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

// Image Carousel
const imagePaths = [
  'carousel-image-1.jpg',
  'carousel-image-2.jpg',
  'carousel-image-3.jpg',
  'carousel-image-4.jpg'
];

const randomImagePaths = shuffle([...imagePaths]); // Shuffling image paths

const imageContainer = document.querySelector('.image-container');

for (let i = 0; i < randomImagePaths.length; i++) {
  const imagePath = `images/${randomImagePaths[i]}`; // Using shuffled image paths
  const img = document.createElement('img');
  img.src = imagePath;
  img.alt = `Carousel Image ${i + 1}`;
  imageContainer.appendChild(img);
}

const images = document.querySelectorAll('.image-container img');

let currentIndex = 0;
let nextIndex = 1;

function animateCarousel() {
  const currentImage = images[currentIndex];
  const nextImage = images[nextIndex];
  const clone = nextImage.cloneNode();

  clone.style.position = 'absolute';
  clone.style.top = 0;
  clone.style.left = 0;
  clone.style.opacity = 0;

  imageContainer.appendChild(clone);

  anime({
    targets: [currentImage],
    opacity: 0,
    duration: 1000,
    easing: 'linear',
    complete: () => {
      currentImage.style.display = 'none';
    }
  });

  anime({
    targets: [nextImage, clone],
    opacity: 1,
    duration: 1000,
    easing: 'linear',
    complete: () => {
      imageContainer.removeChild(clone);
      currentIndex = nextIndex;
      nextIndex = (currentIndex + 1) % images.length;
      setTimeout(animateCarousel, 3000);
    }
  });
}

if (images.length > 0) {
  setTimeout(animateCarousel, 3000);
}
