document.addEventListener('DOMContentLoaded', function() {
            // Sample product data
const products = [
     {
        id: "taupe-tank-top",
        title: "Taupe Tank Top",
        price: 1799,
        category: "WOMEN",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Taupe", "Black", "White"],
        image: "../images/women/p1.png",
        productKey: "taupe-tank-top",
        description: "A versatile wardrobe staple, the taupe tank top offers a sleek, minimalist aesthetic that complements any outfit. Its neutral tone makes it easy to layer or wear solo, perfect for transitioning between seasons. Crafted in soft, breathable fabric, it delivers both comfort and effortless style.",
        reviews: 215,
        rating: 4.7
    },
    {
        id: "bubble-skirts",
        title: "Bubble Skirts",
        price: 3299,
        category: "WOMEN",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Pink", "Black", "White", "Lavender"],
        image: "../images/women/p2.png",
        productKey: "bubble-skirts",
        description: "Playful yet polished, bubble skirts add volume and movement to any look. Their cinched hem creates a rounded silhouette, making them a standout piece. Whether in soft pastels or bold prints, bubble skirts are ideal for adding a touch of whimsy to both casual and elevated ensembles.",
        reviews: 178,
        rating: 4.5
    },
    {
        id: "classic-jeans-blue",
        title: "Classic Jeans – Blue",
        price: 3999,
        category: "WOMEN",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Blue", "Light Blue", "Black"],
        image: "../images/women/p3.png",
        productKey: "classic-jeans-blue",
        description: "Timeless and reliable, these classic blue jeans are a must-have for any wardrobe. With a flattering fit and durable denim fabric, they offer everyday comfort and effortless style. Perfect for pairing with anything from casual tees to chic blouses.",
        reviews: 342,
        rating: 4.8
    },
    {
        id: "denim-jacket-blue",
        title: "Denim Jacket – Blue",
        price: 4599,
        category: "WOMEN",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Blue", "Black", "White"],
        image: "../images/women/p4.png",
        productKey: "denim-jacket-blue",
        description: "The ultimate layering piece, this blue denim jacket adds an edgy, laid-back vibe to any look. Its structured silhouette and versatile wash make it ideal for both cool evenings and transitional weather. A closet staple that never goes out of fashion.",
        reviews: 267,
        rating: 4.6
    },
    {
        id: "silk-blouse-beige",
        title: "Silk Blouse – Beige",
        price: 5499,
        category: "WOMEN",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Beige", "White", "Blush"],
        image: "../images/women/p5.png",
        productKey: "silk-blouse-beige",
        description: "Elegant and refined, the beige silk blouse brings a touch of sophistication to any outfit. With its smooth texture and subtle sheen, it's perfect for dressing up jeans or elevating office wear. Lightweight and breathable, it's both luxurious and comfortable.",
        reviews: 189,
        rating: 4.9
    },
    {
        id: "summer-dress-pink",
        title: "Summer Dress – Pink",
        price: 3799,
        category: "WOMEN",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Pink", "Yellow", "Mint"],
        image: "../images/women/p6.png",
        productKey: "summer-dress-pink",
        description: "Light and breezy, the pink summer dress captures the essence of warm-weather style. Its soft color and flowy design make it perfect for picnics, brunches, or beach days. Feminine, fun, and easy to wear, it's a go-to for sunny days.",
        reviews: 231,
        rating: 4.7
    },
    {
        id: "ruffled-peplum-top",
        title: "Ruffled Peplum Top",
        price: 750,
        category: "WOMEN",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Peach", "White"],
        image: "../images/women/p7.png",
        productKey: "ruffled-peplum-top",
        description: "A feminine peplum top with delicate ruffles that accentuate the waist. The flattering silhouette creates an hourglass shape, perfect for both casual outings and dressier occasions. Lightweight fabric ensures comfort throughout the day.",
        reviews: 156,
        rating: 4.4
    },
    {
        id: "wide-leg-trousers",
        title: "Wide-Leg Trousers",
        price: 1100,
        category: "WOMEN",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Beige", "Black"],
        image: "../images/women/p8.png",
        productKey: "wide-leg-trousers",
        description: "Chic and comfortable wide-leg trousers with a high waist for a flattering fit. The flowing silhouette offers both elegance and ease of movement, making them versatile for office wear or weekend outings. Pair with heels or flats for different looks.",
        reviews: 203,
        rating: 4.6
    },
    {
        id: "vneck-oversized-cardigan",
        title: "V-neck Oversized Cardigan",
        price: 1200,
        category: "WOMEN",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Cream", "Olive"],
        image: "../images/women/p9.png",
        productKey: "vneck-oversized-cardigan",
        description: "A cozy oversized cardigan with a deep V-neck, perfect for layering. The relaxed fit and soft knit fabric make it ideal for chilly days, while the neutral colors ensure it pairs well with any outfit. Effortlessly stylish comfort.",
        reviews: 187,
        rating: 4.5
    },
    {
        id: "wrap-midi-dress",
        title: "Wrap Midi Dress",
        price: 1400,
        category: "WOMEN",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Red", "Navy"],
        image: "../images/women/p10.png",
        productKey: "wrap-midi-dress",
        description: "A flattering wrap dress that cinches at the waist with a tie belt, creating an elegant silhouette. The midi length and wrap design make it universally flattering, suitable for both daytime events and evening occasions. Feminine and timeless.",
        reviews: 224,
        rating: 4.8
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