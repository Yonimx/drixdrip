document.addEventListener('DOMContentLoaded', function() {
            // Sample product data
            const products = [
  {
    id: 1,
    title: "Breathable Linen Shirt",
    price: 2499,
    discount: 15,
    category: "Tops",
    material: "Linen",
    colors: ["Beige", "White", "Sage"],
    sizes: ["S", "M", "L", "XL"],
    tags: ["lightweight", "breathable", "casual", "beachwear"],
    image: "../images/summersale/p1.jpg",
    inStock: true
  },
  {
    id: 2,
    title: "Graphic Tank Top",
    price: 1299,
    discount: 10,
    category: "Tops",
    material: "Cotton Blend",
    colors: ["Black", "White", "Red"],
    sizes: ["S", "M", "L", "XL"],
    tags: ["bold prints", "retro", "minimalist", "sweat-wicking"],
    image: "../images/summersale/p2.jpg",
    inStock: true
  },
  {
    id: 3,
    title: "Cropped Cotton Tee",
    price: 1499,
    discount: 20,
    category: "Tops",
    material: "Cotton",
    colors: ["Pink", "Sky Blue", "White"],
    sizes: ["XS", "S", "M", "L"],
    tags: ["cropped", "casual", "cute", "summer"],
    image: "../images/summersale/p3.jpg",
    inStock: true
  },
  {
    id: 4,
    title: "Distressed Denim Shorts",
    price: 1999,
    discount: 25,
    category: "Bottoms",
    material: "Denim",
    colors: ["Light Blue", "Dark Blue"],
    sizes: ["S", "M", "L", "XL"],
    tags: ["distressed", "edgy", "classic", "comfortable"],
    image: "../images/summersale/p4.jpg",
    inStock: true
  },
  {
    id: 5,
    title: "Relaxed Fit Linen Pants",
    price: 2799,
    discount: 15,
    category: "Bottoms",
    material: "Linen",
    colors: ["Ivory", "Khaki", "Olive"],
    sizes: ["S", "M", "L", "XL"],
    tags: ["relaxed", "lightweight", "vacation", "boho"],
    image: "../images/summersale/p5.jpg",
    inStock: true
  },
  {
    id: 6,
    title: "Flowy Maxi Skirt",
    price: 2399,
    discount: 10,
    category: "Bottoms",
    material: "Rayon",
    colors: ["Navy", "Terracotta", "Floral Print"],
    sizes: ["S", "M", "L", "XL"],
    tags: ["high-waist", "graceful", "casual", "dressy"],
    image: "../images/summersale/p6.jpg",
    inStock: true
  },
  {
    id: 7,
    title: "Mini Sundress",
    price: 2599,
    discount: 20,
    category: "Dresses",
    material: "Cotton Blend",
    colors: ["Yellow", "Floral", "Mint"],
    sizes: ["S", "M", "L"],
    tags: ["flirty", "smocked", "summer", "adventure"],
    image: "../images/summersale/p7.jpg",
    inStock: true
  },
  {
    id: 8,
    title: "Slip Dress",
    price: 2899,
    discount: 15,
    category: "Dresses",
    material: "Polyester",
    colors: ["Black", "Champagne", "Dusty Rose"],
    sizes: ["S", "M", "L"],
    tags: ["versatile", "layered", "night out", "daywear"],
    image: "../images/summersale/p8.jpg",
    inStock: true
  },
  {
    id: 9,
    title: "Slide Sandals",
    price: 999,
    discount: 10,
    category: "Footwear",
    material: "Rubber",
    colors: ["White", "Black", "Pastel Blue"],
    sizes: ["6", "7", "8", "9", "10"],
    tags: ["cushioned", "slip-on", "pool", "casual"],
    image: "../images/summersale/p9.jpg",
    inStock: true
  },
  {
    id: 10,
    title: "Straw Bucket Hat",
    price: 799,
    discount: 5,
    category: "Accessories",
    material: "Straw",
    colors: ["Natural", "Beige", "Striped"],
    sizes: ["One Size"],
    tags: ["sun protection", "vacation", "trendy", "beach"],
    image: "../images/summersale/p10.jpg",
    inStock: true
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
        const discountedPrice = product.price * (1 - product.discount / 100);

        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <a href="../product/product.html?product=${product.id}" class="product-link">
                ${product.image ? `<img src="${product.image}" alt="${product.title}" style="width:100%; height:250px; object-fit:cover; border-radius:4px; margin-bottom:10px;">` : ''}
                <h3>${product.title}</h3>
                <div class="price">
                    <span style="text-decoration: line-through; color: gray;">₱${product.price.toFixed(2)}</span>
                    <span style="color: #e63946; font-weight: bold; margin-left: 8px;">₱${discountedPrice.toFixed(2)}</span>
                    <span style="color: #2a9d8f; font-size: 0.9em; margin-left: 4px;">(${product.discount}% OFF)</span>
                </div>
                <div class="color-options">${product.colors.length} color options</div>
                <div class="size-options">Sizes: ${product.sizes.join(', ')}</div>
            </a>
        `;

        productsContainer.appendChild(productCard);
    });
}


        });