  // Fade-in elements on scroll
  const revealOnScroll = () => {
    const reveals = document.querySelectorAll('.service, .contact-section, .hero');
    const triggerBottom = window.innerHeight * 0.85;
  
    reveals.forEach(reveal => {
      const boxTop = reveal.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        reveal.classList.add('active');
      } else {
        reveal.classList.remove('active');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  
  // Animate nav background on scroll
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.style.background = '#2196f3';
    } else {
      nav.style.background = 'linear-gradient(to right, #4facfe, #00f2fe)';
    }
  });
  
  // Animate gallery hover in detail
  const galleryItems = document.querySelectorAll('.gallery img, .gallery video');
  galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.filter = 'brightness(1.1)';
      item.style.transition = 'all 0.4s';
    });
    item.addEventListener('mouseleave', () => {
      item.style.filter = 'brightness(1)';
    });
  });