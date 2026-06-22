// mobile menu
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});

// close menu on link click
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
  });
});

// reveal on scroll
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.88;

  reveals.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      item.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// faq accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    faqItems.forEach(el => el.classList.remove('active'));

    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// hero card smart animation
const heroItems = document.querySelectorAll('.hero-card__item');
let activeIndex = 0;

setInterval(() => {
  heroItems.forEach(item => item.classList.remove('hero-card__item--active'));
  activeIndex = (activeIndex + 1) % heroItems.length;
  heroItems[activeIndex].classList.add('hero-card__item--active');
}, 2200);
// JavaScript Document