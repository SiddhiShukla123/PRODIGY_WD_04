const typingElement = document.getElementById("typing");
const cursor = document.querySelector(".cursor");

const textArray = ["Web Developer", "AI Enthusiast", "Designer"];
let textIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 60;
let newTextDelay = 1500; // Pause before typing new word

function type() {
  currentText = textArray[textIndex];
  
  if (!isDeleting && charIndex < currentText.length) {
    typingElement.textContent += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else if (isDeleting && charIndex > 0) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(type, erasingDelay);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, newTextDelay);
    } else {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(type, typingDelay);
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (textArray.length) setTimeout(type, newTextDelay);
});