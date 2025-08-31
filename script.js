
// Mobile Menu Toggle

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}


// Typing Effect

const typingData = [
  "Frontend Developer",
  "Graphic Designer",
  "Web Designer",
  "Coding Professional 🚀",
  "Trading Crypto",
  "Future Entrepreneur 💼",
  "Problem Solver"
];

const typingElement = document.querySelector('.typing');
let dataIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let deleting = false;

function typeAnimation() {
  if (!typingElement) return;

  if (dataIndex >= typingData.length) dataIndex = 0;
  const currentText = typingData[dataIndex];

  if (!deleting) {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      deleting = true;
      setTimeout(typeAnimation, 1500); // pause before deleting
      return;
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      dataIndex++;
    }
  }

  setTimeout(typeAnimation, deleting ? 60 : typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeAnimation);



// Project Slider (One Project per Click)

const projectContainer = document.querySelector('.project-container');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentSlide = 0;

function slideProjects(direction) {
  if (!projectContainer) return;

  const totalSlides = projectContainer.children.length;
  const slideWidth = projectContainer.clientWidth; // full width of container

  if (direction === 'next' && currentSlide < totalSlides - 1) {
    currentSlide++;
  } 
  else if (direction === 'prev' && currentSlide > 0) {
    currentSlide--;
  }

  projectContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

if (nextBtn) nextBtn.addEventListener('click', () => slideProjects('next'));
if (prevBtn) prevBtn.addEventListener('click', () => slideProjects('prev'));
