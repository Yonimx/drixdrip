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
  
  document.querySelectorAll('.carousel-container').forEach(container => {
    const carousel = container.querySelector('.carousel-collection');
    const items = carousel.querySelectorAll('.collection-item');
    let currentIndex = 0;

    function scrollToIndex(index) {
      if (index < 0) index = 0;
      if (index >= items.length) index = items.length - 1;
      currentIndex = index;
      items[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }

    container.querySelector('.carousel-scroll.prev').addEventListener('click', () => {
      scrollToIndex(currentIndex - 1);
    });

    container.querySelector('.carousel-scroll.next').addEventListener('click', () => {
      scrollToIndex(currentIndex + 1);
    });

    // Optional: Snap to the closest item on scroll end (for touch)
    carousel.addEventListener('scroll', () => {
      clearTimeout(carousel._scrollTimeout);
      carousel._scrollTimeout = setTimeout(() => {
        let closest = 0;
        let minDiff = Infinity;
        items.forEach((item, i) => {
          const rect = item.getBoundingClientRect();
          const diff = Math.abs(rect.left + rect.right - window.innerWidth) / 2;
          if (diff < minDiff) {
            minDiff = diff;
            closest = i;
          }
        });
        scrollToIndex(closest);
      }, 100);
    });
  });
});
