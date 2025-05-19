document.addEventListener('DOMContentLoaded', function() {
            // Sample product data
            const products = [
                {
                    id: 1,
                    title: "Premium T-Shirt",
                    price: 1299,
                    category: "MEN",
                    sizes: ["S", "M", "L", "XL"],
                    colors: ["Black", "White"],
                    image: "../images/Premium T-Shirt - Black.jpg"
                },
                {
                    id: 2,
                    title: "Classic Jeans",
                    price: 2499,
                    category: "WOMEN",
                    sizes: ["XS", "S", "M"],
                    colors: ["Blue", "Black"],
                    image: "../images/Classic Jeans - Blue.jpg"
                },
                {
                    id: 3,
                    title: "Sports Jacket",
                    price: 3599,
                    category: "MEN",
                    sizes: ["M", "L", "XL", "XXL"],
                    colors: ["Red", "Blue"],
                    image: "../images/Sports Jacket - Blue.png"
                },
                {
                    id: 4,
                    title: "Summer Dress",
                    price: 1999,
                    category: "WOMEN",
                    sizes: ["XS", "S", "M", "L"],
                    colors: ["Yellow", "Pink"],
                    image: "../images/Summer Dress - Pink.jpg"
                },
                {
                    id: 5,
                    title: "Casual Polo",
                    price: 1599,
                    category: "MEN",
                    sizes: ["S", "M", "L"],
                    colors: ["Green", "Navy"],
                    image: "../images/Casual Polo - Green.jpg"
                },
                {
                    id: 6,
                    title: "Denim Jacket",
                    price: 2799,
                    category: "WOMEN",
                    sizes: ["S", "M", "L"],
                    colors: ["Blue", "Black"],
                    image: "../images/Denim Jacket - Blue.jpg"
                },
                {
                    id: 7,
                    title: "Cargo Pants",
                    price: 1899,
                    category: "MEN",
                    sizes: ["M", "L", "XL"],
                    colors: ["Khaki", "Black"],
                    image: "../images/Cargo Pants - Black.jpg"
                },
                {
                    id: 8,
                    title: "Silk Blouse",
                    price: 2299,
                    category: "WOMEN",
                    sizes: ["XS", "S", "M"],
                    colors: ["White", "Beige"],
                    image: "../images/Silk Blouse - Beige.jpg"
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
                        ${product.image ? `<img src="${product.image}" alt="${product.title}" style="width:100%;height:auto;border-radius:4px;margin-bottom:10px;">` : ''}
                        <h3>${product.title}</h3>
                        <div class="price">₱${product.price.toFixed(2)}</div>
                        <div class="color-options">${product.colors.length} color options</div>
                        <div class="size-options">Sizes: ${product.sizes.join(', ')}</div>
                    `;
                    productsContainer.appendChild(productCard);
                });
            }
        });