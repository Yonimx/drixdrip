const images = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('.carousel-nav.prev');
const nextBtn = document.querySelector('.carousel-nav.next');
const dots = document.querySelectorAll('.dot');
let current = 0;
let interval;

function showSlide(index) {
    images[current].classList.remove('active');
    dots[current].classList.remove('active-dot');

    current = (index + images.length) % images.length;

    images[current].classList.add('active');
    dots[current].classList.add('active-dot');
}

function nextSlide() {
    showSlide(current + 1);
}

function prevSlide() {
    showSlide(current - 1);
}

function goToSlide(index) {
    showSlide(index);
    resetAutoSlide();
}

function startAutoSlide() {
    interval = setInterval(nextSlide, 3000);
}

function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
}

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

startAutoSlide();

// Collection carousels functionality
function setupCarousel(carouselIndex) {
    const collection = document.querySelectorAll('.carousel-collection')[carouselIndex];
    const scrollPrev = document.querySelectorAll('.carousel-scroll.prev')[carouselIndex];
    const scrollNext = document.querySelectorAll('.carousel-scroll.next')[carouselIndex];

    scrollPrev.addEventListener('click', () => {
    collection.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
    });

    scrollNext.addEventListener('click', () => {
    collection.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
    });

    // Optional: Hide buttons when at scroll extremes
    collection.addEventListener('scroll', () => {
    scrollPrev.style.display = collection.scrollLeft <= 10 ? 'none' : 'flex';
    scrollNext.style.display = collection.scrollLeft + collection.clientWidth >= 
        collection.scrollWidth - 10 ? 'none' : 'flex';
    });

    // Initial check
    scrollPrev.style.display = 'none';
}

// Initialize both carousels
setupCarousel(0); // Men's Collection
setupCarousel(1); // Women's Collection