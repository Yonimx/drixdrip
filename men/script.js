document.addEventListener('DOMContentLoaded', function() {
            // Sample product data
            const products = [
    {
        id: "boxy-shirt",
        title: "Boxy Shirt",
        price: 2499,
        category: "MEN",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Blue", "Gray"],
        image: "../images/men/p1.png",
        description: "A loose-fitting shirt with a square silhouette, ideal for a relaxed and modern look.",
        reviews: 120,
        rating: 5
    },
    {
        id: "boxy-sweater",
        title: "Boxy Sweater",
        price: 3499,
        category: "MEN",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Beige", "Navy"],
        image: "../images/men/p6.png",
        description: "An oversized sweater designed for comfort and layering, offering a cozy yet stylish appearance.",
        reviews: 95,
        rating: 4.5
    },
    {
        id: "cargo-pants",
        title: "Cargo Pants - Black",
        price: 2999,
        category: "MEN",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black"],
        image: "../images/men/p5.png",
        description: "Functional black pants featuring multiple pockets, perfect for utility and everyday casual wear.",
        reviews: 210,
        rating: 4.8
    },
    {
        id: "casual-polo",
        title: "Casual Polo - Green",
        price: 1999,
        category: "MEN",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Green", "Blue", "White"],
        image: "../images/men/p4.png",
        description: "A green short-sleeve polo shirt with a classic collar, suitable for both relaxed and semi-formal settings.",
        reviews: 78,
        rating: 4.2
    },
    {
        id: "premium-tshirt",
        title: "Premium T-Shirt - Black",
        price: 1599,
        category: "MEN",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "White", "Gray"],
        image: "../images/men/p3.png",
        description: "A high-quality black t-shirt made from soft, durable fabric for all-day comfort and versatility.",
        reviews: 345,
        rating: 4.9
    },
    {
        id: "sports-jacket",
        title: "Sports Jacket - Blue",
        price: 4499,
        category: "MEN",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Blue", "Black"],
        image: "../images/men/p2.png",
        description: "A stylish blue jacket tailored for light sports or casual wear, combining performance and fashion.",
        reviews: 132,
        rating: 4.7
    },
    {
        id: "linen-blend-shirt",
        title: "Linen Blend Shirt",
        price: 750,
        category: "MEN",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Beige", "White"],
        image: "../images/men/p7.png",
        productKey: "linen-blend-shirt",
        description: "A breathable linen-cotton blend shirt perfect for warm weather, offering both comfort and a polished casual look.",
        reviews: 88,
        rating: 4.6
    },
    {
        id: "slim-fit-jeans",
        title: "Slim Fit Jeans",
        price: 899,
        category: "MEN",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Blue", "Black"],
        image: "../images/men/p8.png",
        productKey: "slim-fit-jeans",
        description: "Modern slim-fit jeans with stretch technology for all-day comfort, featuring a versatile wash that pairs with everything.",
        reviews: 215,
        rating: 4.8
    },
    {
        id: "puffer-vest",
        title: "Puffer Vest",
        price: 1100,
        category: "MEN",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Olive", "Black"],
        image: "../images/men/p9.png",
        productKey: "puffer-vest",
        description: "Lightweight yet warm quilted puffer vest with a water-resistant shell, ideal for layering in transitional weather.",
        reviews: 142,
        rating: 4.5
    },
    {
        id: "graphic-hoodie",
        title: "Graphic Hoodie",
        price: 850,
        category: "MEN",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Gray", "Maroon"],
        image: "../images/men/p10.png",
        productKey: "graphic-hoodie",
        description: "Comfortable cotton hoodie featuring a subtle graphic print, perfect for casual everyday wear with a streetwear edge.",
        reviews: 176,
        rating: 4.7
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