// Typing animation
const typingText = "👾 HACKAMARATHON 2025 — XTREME CLUB 👾";
let index = 0;

function typeEffect() {
  if (index < typingText.length) {
    document.getElementById("typing").innerHTML += typingText.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Countdown Timer
const countDownDate = new Date("Apr 25, 2025 14:30:00").getTime();
const countdownElement = document.getElementById("countdown");

const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  if (distance < 0) {
    clearInterval(x);
    countdownElement.innerHTML = "🚨 Event Started!";
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}, 1000);

// Modal Logic
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const modal = document.getElementById("registrationModal");
const registerForm = document.getElementById("registerForm");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(registerForm);
  const values = Object.fromEntries(formData.entries());
  console.log("Form Submitted:", values);
  alert("✅ Registered Successfully!");
  registerForm.reset();
  modal.style.display = "none";
});
