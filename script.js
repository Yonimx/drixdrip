// Simple carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.carousel img');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  
  function showSlide(index) {
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active-dot'));
    
    images[index].classList.add('active');
    dots[index].classList.add('active-dot');
    currentIndex = index;
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  }
  
  // Auto-rotate every 5 seconds
  setInterval(nextSlide, 5000);
  
  // Navigation buttons
  document.querySelector('.carousel-nav.next').addEventListener('click', nextSlide);
  document.querySelector('.carousel-nav.prev').addEventListener('click', prevSlide);
  
  // Dot navigation
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'));
      showSlide(index);
    });
  });
  
  // Horizontal scroll for product carousels
  const scrollContainers = document.querySelectorAll('.carousel-collection');
  const scrollButtons = document.querySelectorAll('.carousel-scroll');
  
  scrollButtons.forEach(button => {
    button.addEventListener('click', function() {
      const direction = this.classList.contains('prev') ? -1 : 1;
      const container = this.parentElement.querySelector('.carousel-collection');
      container.scrollBy({ left: direction * 300, behavior: 'smooth' });
    });
  });
});