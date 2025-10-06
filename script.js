// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks){
  hamburger.addEventListener('click', ()=> navLinks.classList.toggle('show'));
}

// Basic slider (one per page max)
const slider = document.querySelector('.slider');
if (slider){
  const slides = slider.querySelector('.slides');
  const images = slides.querySelectorAll('img');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  let index = 0;

  function go(i){
    index = (i + images.length) % images.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  prev.addEventListener('click', ()=> go(index - 1));
  next.addEventListener('click', ()=> go(index + 1));

  // autoplay (optional)
  let timer = setInterval(()=> go(index + 1), 4000);
  slider.addEventListener('mouseenter', ()=> clearInterval(timer));
  slider.addEventListener('mouseleave', ()=> timer = setInterval(()=> go(index + 1), 4000));
}