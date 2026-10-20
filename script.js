// Toggle Mobile Navigation Menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
});

// Close Menu When a Navigation Link Is Clicked
document.querySelectorAll('.navbar a').forEach(link => {
link.addEventListener('click', () => {
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
});
});

// Active Navigation Link on Scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
let currentSection = '';

sections.forEach(section => {
    let sectionTop = section.offsetTop - 150;
    let sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
    }
});

navLinks.forEach(link => {
    link.classList.remove('active');

    if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
    }
});

});

// Typing Animation
const textElement = document.querySelector('.multiple-text');

if (textElement) {
const words = ['Graphic Designer', 'Creative Designer', 'Visual Artist'];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    textElement.textContent = currentWord.substring(0, charIndex);

    let delay = deleting ? 60 : 100;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        delay = 1200;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
    }

    setTimeout(typeEffect, delay);
}

typeEffect();

}

// Download CV Button Message
document.querySelectorAll('.btn').forEach(button => {
if (button.textContent.trim() === 'Download CV') {
button.addEventListener('click', event => {
event.preventDefault();
alert('Please add your CV PDF file to enable the download feature.');
});
}
});