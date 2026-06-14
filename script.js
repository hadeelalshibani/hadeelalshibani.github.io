const reveals = document.querySelectorAll('.reveal');
const navLinks = document.querySelectorAll('.nav-links a');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const cursorGlow = document.querySelector('.cursor-glow');

function revealOnScroll(){
  reveals.forEach((el)=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 80){
      el.classList.add('active');
    }
  });
}

function setActiveLink(){
  const sections = ['about','projects','skills','certifications','contact']
    .map((id)=>document.getElementById(id))
    .filter(Boolean);
  let current = '';
  sections.forEach((section)=>{
    if(section.getBoundingClientRect().top <= 160){
      current = section.id;
    }
  });
  navLinks.forEach((link)=>{
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', () => {
  revealOnScroll();
  setActiveLink();
});
window.addEventListener('load', () => {
  revealOnScroll();
  setActiveLink();
});

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link)=>{
  link.addEventListener('click',()=>{
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded','false');
  });
});

window.addEventListener('pointermove',(event)=>{
  if(!cursorGlow) return;
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});
