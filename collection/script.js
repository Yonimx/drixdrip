document.addEventListener('DOMContentLoaded', function() {
            // Sample product data
            const products = [
    {
        id: "urban-utility-tote",
        title: "Urban Utility Tote",
        price: 1899,
        category: "UNISEX",
        sizes: ["Standard"],
        colors: ["Charcoal Black", "Ecru White"],
        image: "../images/collection/p1.jpg",
        productKey: "urban-utility-tote",
        description: "Our signature 18oz canvas tote with military-grade stitching and vegetable-tanned leather accents. Water-resistant base keeps essentials dry.",
        reviews: 284,
        rating: 4.8
    },
    {
        id: "vintage-slim-jeans",
        title: "90s Vintage Slim Jeans",
        price: 3299,
        category: "WOMEN",
        sizes: ["24", "25", "26", "27", "28", "29", "30"],
        colors: ["Vintage Indigo", "Midnight Black"],
        image: "../images/collection/p2.jpg",
        productKey: "vintage-slim-jeans",
        description: "Hand-dyed using traditional indigo methods for authentic vintage fading with hidden stretch panels for comfort.",
        reviews: 367,
        rating: 4.9
    },
    {
        id: "performance-bomber",
        title: "Aero Performance Bomber",
        price: 4999,
        category: "MEN",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Racing Red", "Nautical Blue"],
        image: "../images/collection/p3.avif",
        productKey: "performance-bomber",
        description: "Wind-resistant jacket with laser-cut ventilation panels and reflective detailing for urban cycling or adventures.",
        reviews: 198,
        rating: 4.7
    },
    {
        id: "linen-midi-dress",
        title: "Linen Midi Dress",
        price: 2799,
        category: "WOMEN",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Sunflower Yellow", "Blush Pink"],
        image: "../images/collection/p4.avif",
        productKey: "linen-midi-dress",
        description: "Breathable European flax linen dress with hidden side pockets and adjustable self-tie belt.",
        reviews: 412,
        rating: 4.9
    },
    {
        id: "merino-polo",
        title: "Merino Wool Polo",
        price: 2399,
        category: "MEN",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Eucalyptus Green", "Navy"],
        image: "../images/collection/p5.jpg",
        productKey: "merino-polo",
        description: "Temperature-regulating polo with mother-of-pearl buttons that wicks moisture three times faster than cotton.",
        reviews: 231,
        rating: 4.6
    },
    {
        id: "riviera-bucket-hat",
        title: "Riviera Bucket Hat",
        price: 1099,
        category: "UNISEX",
        sizes: ["OSFM"],
        colors: ["Natural Raffia", "Sand Stripe", "Terracotta"],
        image: "../images/summersale/p10.jpg",
        productKey: "riviera-bucket-hat",
        description: "Artisanal handwoven raffia hat with UPF 50+ protection and internal sweatband - no two are exactly alike.",
        reviews: 176,
        rating: 4.5
    }
];

 const productsContainer = document.getElementById('productsContainer');
            const clearAllBtn = document.getElementById('clearAll');
            const applyFiltersBtn = document.getElementById('applyFilters');
            const subscribeBtn = document.getElementById('subscribe');

            // Render all products initially
            renderProducts(products);

            // Clear all filters
            clearAllBtn.addEventListener('click', function() {
                document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                    checkbox.checked = false;
                });
                document.querySelectorAll('input[type="radio"]').forEach(radio => {
                    radio.checked = false;
                });
                document.getElementById('minPrice').value = '';
                document.getElementById('maxPrice').value = '';
                renderProducts(products);
            });

            // Apply filters
            applyFiltersBtn.addEventListener('click', filterAndRenderProducts);

            // Subscribe button
            subscribeBtn.addEventListener('click', function() {
                const email = document.querySelector('input[type="email"]').value;
                if (email && email.includes('@')) {
                    alert('Thank you for subscribing!');
                } else {
                    alert('Please enter a valid email address.');
                }
            });

            // Helper function to get selected checkbox values
            function getSelectedValues(name) {
                const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
                return Array.from(checkboxes).map(checkbox => checkbox.value);
            }

            // Filter and render products
            function filterAndRenderProducts() {
                const selectedCategories = getSelectedValues('category');
                const selectedSizes = getSelectedValues('size');
                const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
                const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;
                const sortOption = document.querySelector('input[name="sort"]:checked')?.value;

                let filteredProducts = products.filter(product => {
                    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
                        return false;
                    }
                    if (selectedSizes.length > 0) {
                        const hasSize = selectedSizes.some(size => product.sizes.includes(size));
                        if (!hasSize) return false;
                    }
                    if (product.price < minPrice || product.price > maxPrice) {
                        return false;
                    }
                    return true;
                });

                if (sortOption === 'low-high') {
                    filteredProducts.sort((a, b) => a.price - b.price);
                } else if (sortOption === 'high-low') {
                    filteredProducts.sort((a, b) => b.price - a.price);
                }

                renderProducts(filteredProducts);
            }

            // Attach event listeners to all filter checkboxes and radios
            document.querySelectorAll('input[name="category"], input[name="size"], input[name="sort"]').forEach(input => {
                input.addEventListener('change', filterAndRenderProducts);
            });

            // Also update when price inputs change
            document.getElementById('minPrice').addEventListener('input', filterAndRenderProducts);
            document.getElementById('maxPrice').addEventListener('input', filterAndRenderProducts);

            // Render products to the page
            function renderProducts(productsToRender) {
                productsContainer.innerHTML = '';
                
                if (productsToRender.length === 0) {
                    productsContainer.innerHTML = '<div class="no-products">No products match your filters. Try adjusting your search criteria.</div>';
                    return;
                }

                productsToRender.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.className = 'product-card';
                    productCard.innerHTML = `
                        <a href="../product/product.html?product=${product.id}" class="product-link">
                            ${product.image ? `<img src="${product.image}" alt="${product.title}" class="product-image">` : ''}
                            <h3>${product.title}</h3>
                            <div class="price">₱${product.price.toFixed(2)}</div>
                            <div class="color-options">${product.colors.length} color options</div>
                            <div class="size-options">Sizes: ${product.sizes.join(', ')}</div>
                        </a>
                    `;

                    productsContainer.appendChild(productCard);
                });
            }
        });
