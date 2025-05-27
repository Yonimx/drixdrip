
// Product data
const products = {
    "boxy-shirt": {
        img: "../images/men/p1.png",
        name: "Boxy Shirt",
        category: "MEN",
        reviews: 120,
        rating: 5,
        price: "₱2,499",
        description: "A loose-fitting shirt with a square silhouette, ideal for a relaxed and modern look."
    },
    "boxy-sweater": {
        img: "../images/men/p6.png",
        name: "Boxy Sweater",
        category: "MEN",
        reviews: 95,
        rating: 4.5,
        price: "₱3,499",
        description: "A jacket designed for comfort and layering, offering a cozy yet stylish appearance."
    },
    "cargo-pants": {
        img: "../images/men/p5.png",
        name: "Cargo Pants - Black",
        category: "MEN",
        reviews: 210,
        rating: 4.8,
        price: "₱2,999",
        description: "Functional black pants featuring multiple pockets, perfect for utility and everyday casual wear."
    },
    "casual-polo": {
        img: "../images/men/p4.png",
        name: "Casual Polo - Green",
        category: "MEN",
        reviews: 78,
        rating: 4.2,
        price: "₱1,999",
        description: "A green short-sleeve polo shirt with a classic collar, suitable for both relaxed and semi-formal settings."
    },
    "premium-tshirt": {
        img: "../images/men/p3.png",
        name: "Premium T-Shirt - Black",
        category: "MEN",
        reviews: 345,
        rating: 4.9,
        price: "₱1,599",
        description: "A high-quality black t-shirt made from soft, durable fabric for all-day comfort and versatility."
    },
    "sports-jacket": {
        img: "../images/men/p2.png",
        name: "Sports Jacket",
        category: "MEN",
        reviews: 132,
        rating: 4.7,
        price: "₱4,499",
        description: "A stylish blue jacket tailored for light sports or casual wear, combining performance and fashion."
    },
    "linen-blend-shirt": {
        img: "../images/men/p7.png",
        name: "Linen Blend Shirt",
        category: "MEN",
        reviews: 88,
        rating: 4.6,
        price: "₱750",
        description: "A breathable linen-cotton blend shirt perfect for warm weather, offering both comfort and a polished casual look."
    },
    "slim-fit-jeans": {
        img: "../images/men/p8.png",
        name: "Slim Fit Jeans",
        category: "MEN",
        reviews: 215,
        rating: 4.8,
        price: "₱899",
        description: "Modern slim-fit jeans with stretch technology for all-day comfort, featuring a versatile wash that pairs with everything."
    },
    "puffer-vest": {
        img: "../images/men/p9.png",
        name: "Puffer Vest",
        category: "MEN",
        reviews: 142,
        rating: 4.5,
        price: "₱1,100",
        description: "Lightweight yet warm quilted puffer vest with a water-resistant shell, ideal for layering in transitional weather."
    },
    "graphic-hoodie": {
        img: "../images/men/p10.png",
        name: "Graphic Hoodie",
        category: "MEN",
        reviews: 176,
        rating: 4.7,
        price: "₱850",
        description: "Comfortable cotton hoodie featuring a subtle graphic print, perfect for casual everyday wear with a streetwear edge."
    },"taupe-tank-top": {
        img: "../images/women/p1.png",
        name: "Taupe Tank Top",
        category: "WOMEN",
        reviews: 215,
        rating: 4.7,
        price: "₱1,799",
        description: "A versatile wardrobe staple offering a sleek, minimalist aesthetic that complements any outfit. Crafted in soft, breathable fabric for all-day comfort."
    },
    "bubble-skirts": {
        img: "../images/women/p2.png",
        name: "Bubble Skirts",
        category: "WOMEN",
        reviews: 178,
        rating: 4.5,
        price: "₱3,299",
        description: "Playful yet polished skirts with cinched hems that create a rounded silhouette. Perfect for adding whimsy to casual and elevated ensembles."
    },
    "classic-jeans-blue": {
        img: "../images/women/p3.png",
        name: "Classic Jeans – Blue",
        category: "WOMEN",
        reviews: 342,
        rating: 4.8,
        price: "₱3,999",
        description: "Timeless blue jeans with a flattering fit and durable denim fabric. The perfect foundation for any outfit, from casual tees to chic blouses."
    },
    "denim-jacket-blue": {
        img: "../images/women/p4.png",
        name: "Denim Jacket – Blue",
        category: "WOMEN",
        reviews: 267,
        rating: 4.6,
        price: "₱4,599",
        description: "The ultimate layering piece with structured silhouette and versatile wash. Adds an edgy, laid-back vibe to any look."
    },
    "silk-blouse-beige": {
        img: "../images/women/p5.png",
        name: "Silk Blouse – Beige",
        category: "WOMEN",
        reviews: 189,
        rating: 4.9,
        price: "₱5,499",
        description: "Elegant and refined with smooth texture and subtle sheen. Perfect for dressing up jeans or elevating office wear with luxurious comfort."
    },
    "summer-dress-pink": {
        img: "../images/women/p6.png",
        name: "Summer Dress – Pink",
        category: "WOMEN",
        reviews: 231,
        rating: 4.7,
        price: "₱3,799",
        description: "Light and breezy dress capturing warm-weather style. Flowy design perfect for picnics, brunches, or beach days."
    },
    "ruffled-peplum-top": {
        img: "../images/women/p7.png",
        name: "Ruffled Peplum Top",
        category: "WOMEN",
        reviews: 156,
        rating: 4.4,
        price: "₱750",
        description: "Feminine peplum top with delicate ruffles that accentuate the waist. Creates a flattering hourglass silhouette."
    },
    "wide-leg-trousers": {
        img: "../images/women/p8.png",
        name: "Wide-Leg Trousers",
        category: "WOMEN",
        reviews: 203,
        rating: 4.6,
        price: "₱1,100",
        description: "Chic high-waisted trousers with flowing silhouette. Offers both elegance and ease of movement for versatile styling."
    },
    "vneck-oversized-cardigan": {
        img: "../images/women/p9.png",
        name: "V-neck Oversized Cardigan",
        category: "WOMEN",
        reviews: 187,
        rating: 4.5,
        price: "₱1,200",
        description: "Cozy oversized cardigan with deep V-neck. Relaxed fit and soft knit fabric make it ideal for chilly days."
    },
    "wrap-midi-dress": {
        img: "../images/women/p10.png",
        name: "Wrap Midi Dress",
        category: "WOMEN",
        reviews: 224,
        rating: 4.8,
        price: "₱1,400",
        description: "Flattering wrap dress that cinches at the waist. Midi length and wrap design create an elegant, timeless silhouette."
    },
    "urban-utility-tote": {
        img: "../images/collection/p1.jpg",
        name: "Urban Utility Tote",
        category: "UNISEX",
        reviews: 284,
        rating: 4.8,
        price: "₱1,899",
        sizes: ["Standard"],
        colors: ["Charcoal Black", "Ecru White"],
        material: "Organic Cotton Canvas",
        description: "Our signature 18oz canvas tote with military-grade stitching and vegetable-tanned leather accents. Water-resistant base keeps essentials dry while the structured silhouette maintains its shape.",
        limitedEdition: true
    },
    // ... other existing products ...
    
    // Add your summersale products with string keys:
    "breathable-linen-shirt": {
        img: "../images/summersale/p1.jpg",
        name: "Breathable Linen Shirt",
        category: "TOPS",
        reviews: 42,
        rating: 4.5,
        price: "₱2,124", // discounted price
        originalPrice: "₱2,499",
        discount: 15,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Beige", "White", "Sage"],
        material: "Linen",
        description: "Lightweight and breathable linen shirt perfect for casual beachwear. Features natural material that's comfortable in warm weather.",
        inStock: true
    },
    "graphic-tank-top": {
        img: "../images/summersale/p2.jpg",
        name: "Graphic Tank Top",
        category: "TOPS",
        reviews: 38,
        rating: 4.3,
        price: "₱1,169", // discounted price
        originalPrice: "₱1,299",
        discount: 10,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "White", "Red"],
        material: "Cotton Blend",
        description: "Bold prints with retro style. Features sweat-wicking material perfect for active wear.",
        inStock: true
    },
    "cropped-cotton-tee": {
        img: "../images/summersale/p3.jpg",
        name: "Cropped Cotton Tee",
        category: "TOPS",
        reviews: 56,
        rating: 4.7,
        price: "₱1,199", // discounted price
        originalPrice: "₱1,499",
        discount: 20,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Pink", "Sky Blue", "White"],
        material: "Cotton",
        description: "Cute cropped tee perfect for summer casual wear. Soft cotton material with a flattering fit.",
        inStock: true
    },
    "distressed-denim-shorts": {
        img: "../images/summersale/p4.jpg",
        name: "Distressed Denim Shorts",
        category: "BOTTOMS",
        reviews: 73,
        rating: 4.6,
        price: "₱1,499", // discounted price
        originalPrice: "₱1,999",
        discount: 25,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Light Blue", "Dark Blue"],
        material: "Denim",
        description: "Edgy distressed denim shorts with classic comfortable fit. Perfect for casual everyday wear.",
        inStock: true
    },
    "relaxed-linen-pants": {
        img: "../images/summersale/p5.jpg",
        name: "Relaxed Fit Linen Pants",
        category: "BOTTOMS",
        reviews: 89,
        rating: 4.8,
        price: "₱2,379", // discounted price
        originalPrice: "₱2,799",
        discount: 15,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Ivory", "Khaki", "Olive"],
        material: "Linen",
        description: "Lightweight vacation pants with relaxed boho style. Perfect for comfortable all-day wear.",
        inStock: true
    },
    "flowy-maxi-skirt": {
        img: "../images/summersale/p6.jpg",
        name: "Flowy Maxi Skirt",
        category: "BOTTOMS",
        reviews: 67,
        rating: 4.4,
        price: "₱2,159", // discounted price
        originalPrice: "₱2,399",
        discount: 10,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Navy", "Terracotta", "Floral Print"],
        material: "Rayon",
        description: "High-waist graceful skirt that transitions from casual to dressy occasions.",
        inStock: true
    },
    "mini-sundress": {
        img: "../images/summersale/p7.jpg",
        name: "Mini Sundress",
        category: "DRESSES",
        reviews: 94,
        rating: 4.9,
        price: "₱2,079", // discounted price
        originalPrice: "₱2,599",
        discount: 20,
        sizes: ["S", "M", "L"],
        colors: ["Yellow", "Floral", "Mint"],
        material: "Cotton Blend",
        description: "Flirty smocked sundress perfect for summer adventures. Comfortable and stylish.",
        inStock: true
    },
    "slip-dress": {
        img: "../images/summersale/p8.jpg",
        name: "Slip Dress",
        category: "DRESSES",
        reviews: 81,
        rating: 4.5,
        price: "₱2,464", // discounted price
        originalPrice: "₱2,899",
        discount: 15,
        sizes: ["S", "M", "L"],
        colors: ["Black", "Champagne", "Dusty Rose"],
        material: "Polyester",
        description: "Versatile layered dress perfect for night out or daywear occasions.",
        inStock: true
    },
    "slide-sandals": {
        img: "../images/summersale/p9.jpg",
        name: "Slide Sandals",
        category: "FOOTWEAR",
        reviews: 127,
        rating: 4.2,
        price: "₱899", // discounted price
        originalPrice: "₱999",
        discount: 10,
        sizes: ["6", "7", "8", "9", "10"],
        colors: ["White", "Black", "Pastel Blue"],
        material: "Rubber",
        description: "Cushioned slip-on sandals perfect for pool and casual wear.",
        inStock: true
    },
    "straw-bucket-hat": {
        img: "../images/summersale/p10.jpg",
        name: "Straw Bucket Hat",
        category: "ACCESSORIES",
        reviews: 45,
        rating: 4.3,
        price: "₱759", // discounted price
        originalPrice: "₱799",
        discount: 5,
        sizes: ["One Size"],
        colors: ["Natural", "Beige", "Striped"],
        material: "Straw",
        description: "Trendy beach hat with sun protection. Perfect for vacation and outdoor activities.",
        inStock: true
    },
     "urban-utility-tote": {
        img: "../images/collection/p1.jpg",
        name: "Urban Utility Tote",
        category: "UNISEX",
        reviews: 284,
        rating: 4.8,
        price: "₱1,899",
        originalPrice: "₱2,199",
        discount: 14,
        sizes: ["Standard"],
        colors: ["Charcoal Black", "Ecru White"],
        material: "Canvas & Leather",
        description: "Our signature 18oz canvas tote with military-grade stitching and vegetable-tanned leather accents. Water-resistant base keeps essentials dry.",
        inStock: true
    },
    "vintage-slim-jeans": {
        img: "../images/collection/p2.jpg",
        name: "90s Vintage Slim Jeans",
        category: "WOMEN",
        reviews: 367,
        rating: 4.9,
        price: "₱3,299",
        originalPrice: "₱3,899",
        discount: 15,
        sizes: ["24", "25", "26", "27", "28", "29", "30"],
        colors: ["Vintage Indigo", "Midnight Black"],
        material: "Selvedge Denim",
        description: "Hand-dyed using traditional indigo methods for authentic vintage fading with hidden stretch panels for comfort.",
        inStock: true
    },
    "performance-bomber": {
        img: "../images/collection/p3.avif",
        name: "Aero Performance Bomber",
        category: "MEN",
        reviews: 198,
        rating: 4.7,
        price: "₱4,999",
        originalPrice: "₱5,999",
        discount: 17,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Racing Red", "Nautical Blue"],
        material: "Recycled Nylon/Spandex",
        description: "Wind-resistant jacket with laser-cut ventilation panels and reflective detailing for urban cycling or adventures.",
        inStock: true
    },
    "linen-midi-dress": {
        img: "../images/collection/p4.avif",
        name: "Linen Midi Dress",
        category: "WOMEN",
        reviews: 412,
        rating: 4.9,
        price: "₱2,799",
        originalPrice: "₱3,299",
        discount: 15,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Sunflower Yellow", "Blush Pink"],
        material: "European Linen",
        description: "Breathable European flax linen dress with hidden side pockets and adjustable self-tie belt.",
        inStock: true
    },
    "merino-polo": {
        img: "../images/collection/p5.jpg",
        name: "Merino Wool Polo",
        category: "MEN",
        reviews: 231,
        rating: 4.6,
        price: "₱2,399",
        originalPrice: "₱2,899",
        discount: 17,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Eucalyptus Green", "Navy"],
        material: "Merino Wool",
        description: "Temperature-regulating polo with mother-of-pearl buttons that wicks moisture three times faster than cotton.",
        inStock: true
    },
    "riviera-bucket-hat": {
        img: "../images/summersale/p10.jpg",
        name: "Riviera Bucket Hat",
        category: "UNISEX",
        reviews: 176,
        rating: 4.5,
        price: "₱1,099",
        originalPrice: "₱1,499",
        discount: 27,
        sizes: ["OSFM"],
        colors: ["Natural Raffia", "Sand Stripe", "Terracotta"],
        material: "Handwoven Raffia",
        description: "Artisanal handwoven raffia hat with UPF 50+ protection and internal sweatband - no two are exactly alike.",
        inStock: true
    }
}; 
// ✅ CORRECT: Get product from URL
const urlParams = new URLSearchParams(window.location.search);
const productKey = urlParams.get('product') || 'boxy-shirt';  // fallback
const product = products[productKey];


// Update product info
if (product) {
    document.querySelector('main img').src = product.img;
    document.querySelector('main img').alt = product.name;
    document.querySelector('.text-3xl.font-bold').textContent = product.name;
    document.querySelector('.text-sm.text-gray-500').textContent = `Category: ${product.category}`;
    document.querySelector('.text-sm.text-gray-600').textContent = `(${product.reviews} reviews)`;
    document.querySelector('.text-2xl.font-semibold').textContent = product.price;
    document.querySelector('.mt-6 .text-gray-700').textContent = product.description;

    // Update stars
    const stars = "★".repeat(product.rating) + "☆".repeat(5 - product.rating);
    document.querySelector('.text-yellow-400').textContent = stars;
}

// Randomize "You may also like"
function getRandomProducts(productsObj, excludeKey, category, count = 3) {
    const keys = Object.keys(productsObj)
        .filter(k => k !== excludeKey && productsObj[k].category === category);

    for (let i = keys.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [keys[i], keys[j]] = [keys[j], keys[i]];
    }

    return keys.slice(0, count).map(key => ({ key, ...productsObj[key] }));
}
const alsoLikeGrid = document.getElementById('also-like-grid');
if (alsoLikeGrid && product) {
    const suggestions = getRandomProducts(products, productKey, product.category, 3);
    alsoLikeGrid.innerHTML = suggestions.map(prod => `
        <a href="product.html?product=${prod.key}" class="product-link">
            <div class="border rounded p-4 hover:shadow text-left">
                <img src="${prod.img}" alt="${prod.name}" class="product-image mb-2 block" />
                <p class="font-semibold">${prod.name}</p>
                <p class="text-sm text-gray-600">${prod.price}</p>
            </div>
        </a>
    `).join('');
}
