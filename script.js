// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};
// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};
const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};
// Close side navigation
cancelBtn.onclick = hideNavMenu;
// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});


const roles = [
  "Mahasiswa Informatika",
  "UI/UX Designer",
  "Web Developer",
  "Software Engineer",
  "Full Stack Developer"
];

let index = 0;
let currentText = '';
let currentCharIndex = 0;
const typingSpeed = 100; // Kecepatan mengetik dalam milidetik
const eraseSpeed = 50;  // Kecepatan menghapus dalam milidetik
const roleElement = document.getElementById('role');

function typeText() {
  // Mengetik karakter satu per satu
  if (currentCharIndex < roles[index].length) {
      currentText += roles[index][currentCharIndex];
      roleElement.textContent = currentText;
      currentCharIndex++;
      setTimeout(typeText, typingSpeed);
  } else {
      // Setelah mengetik selesai, tunggu sebentar sebelum menghapus teks
      setTimeout(eraseText, 1500); // Tunggu 1,5 detik sebelum menghapus
  }
}

function eraseText() {
  // Menghapus karakter satu per satu
  if (currentCharIndex > 0) {
      currentText = currentText.slice(0, -1);
      roleElement.textContent = currentText;
      currentCharIndex--;
      setTimeout(eraseText, eraseSpeed);
  } else {
      // Setelah menghapus selesai, pindah ke teks berikutnya
      index = (index + 1) % roles.length; // Mengulang ke indeks pertama jika mencapai akhir array
      setTimeout(typeText, 500); // Tunggu sebentar sebelum mulai mengetik teks baru
  }
}

// Mulai proses mengetik
typeText()