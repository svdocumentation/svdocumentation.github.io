function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }
  
  // Animate nav links on load
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-links a').forEach((link, index) => {
      link.style.animation = `fadeIn 0.5s ease ${(index + 1) * 0.2}s forwards`;
    });
  });
  
  // Hover animation on service boxes
  const services = document.querySelectorAll('.service');
  services.forEach((service) => {
    service.addEventListener('mouseenter', () => {
      service.style.transform = 'scale(1.02)';
      service.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    });
    service.addEventListener('mouseleave', () => {
      service.style.transform = 'scale(1)';
      service.style.boxShadow = 'none';
    });
  });
  
  // Smooth scroll to sections
  const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  };
  smoothScroll();
  
  // Animated button press
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
      button.style.transform = 'scale(0.95)';
    });
    button.addEventListener('mouseup', () => {
      button.style.transform = 'scale(1)';
    });
  });
  

