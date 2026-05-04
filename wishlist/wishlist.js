// Product data for reference
const products = {
    "boxy-shirt": {
        name: "Boxy Shirt",
        img: "../images/men/p1.png",
        category: "MEN"
    },
    "boxy-sweater": {
        name: "Boxy Sweater",
        img: "../images/men/p6.png",
        category: "MEN"
    },
    "cargo-pants": {
        name: "Cargo Pants - Black",
        img: "../images/men/p5.png",
        category: "MEN"
    },
    "casual-polo": {
        name: "Casual Polo - Green",
        img: "../images/men/p4.png",
        category: "MEN"
    },
    "premium-tshirt": {
        name: "Premium T-Shirt - Black",
        img: "../images/men/p3.png",
        category: "MEN"
    },
    "sports-jacket": {
        name: "Sports Jacket",
        img: "../images/men/p2.png",
        category: "MEN"
    },
    "linen-blend-shirt": {
        name: "Linen Blend Shirt",
        img: "../images/men/p7.png",
        category: "MEN"
    },
    "slim-fit-jeans": {
        name: "Slim Fit Jeans",
        img: "../images/men/p8.png",
        category: "MEN"
    },
    "puffer-vest": {
        name: "Puffer Vest",
        img: "../images/men/p9.png",
        category: "MEN"
    },
    "graphic-hoodie": {
        name: "Graphic Hoodie",
        img: "../images/men/p10.png",
        category: "MEN"
    },
    "taupe-tank-top": {
        name: "Taupe Tank Top",
        img: "../images/women/p1.png",
        category: "WOMEN"
    },
    "bubble-skirts": {
        name: "Bubble Skirts",
        img: "../images/women/p2.png",
        category: "WOMEN"
    },
    "classic-jeans-blue": {
        name: "Classic Jeans – Blue",
        img: "../images/women/p3.png",
        category: "WOMEN"
    },
    "denim-jacket-blue": {
        name: "Denim Jacket – Blue",
        img: "../images/women/p4.png",
        category: "WOMEN"
    },
    "silk-blouse-beige": {
        name: "Silk Blouse – Beige",
        img: "../images/women/p5.png",
        category: "WOMEN"
    },
    "summer-dress-pink": {
        name: "Summer Dress – Pink",
        img: "../images/women/p6.png",
        category: "WOMEN"
    },
    "ruffled-peplum-top": {
        name: "Ruffled Peplum Top",
        img: "../images/women/p7.png",
        category: "WOMEN"
    },
    "wide-leg-trousers": {
        name: "Wide-Leg Trousers",
        img: "../images/women/p8.png",
        category: "WOMEN"
    },
    "vneck-oversized-cardigan": {
        name: "V-neck Oversized Cardigan",
        img: "../images/women/p9.png",
        category: "WOMEN"
    },
    "wrap-midi-dress": {
        name: "Wrap Midi Dress",
        img: "../images/women/p10.png",
        category: "WOMEN"
    }
};

// Display wishlist items
function displayWishlist() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const container = document.getElementById('wishlist-items-container');
    const emptyMessage = document.getElementById('empty-wishlist-message');

    if (wishlist.length === 0) {
        container.innerHTML = '';
        emptyMessage.style.display = 'block';
        return;
    }

    emptyMessage.style.display = 'none';

    container.innerHTML = wishlist.map((item, index) => `
        <div class="d-flex align-items-center mb-4 px-2 wishlist-item" data-index="${index}">
            <div class="col-6 d-flex align-items-center">
                <div style="width: 100px; height: 100px; border: 2px solid #000; display: flex; align-items: center; justify-content: center; margin-right: 20px; overflow: hidden;">
                    <img src="${item.img}" alt="${item.name}" style="width:100%; height:100%; object-fit: cover;">
                </div>
                <div>
                    <p class="mb-1 fw-medium" style="font-size: 18px;">${item.name}</p>
                    <p class="mb-0" style="font-size: 16px;">Category: ${item.category}</p>
                </div>
            </div>
            <div class="col-3" style="font-size: 16px;">${item.price}</div>
            <div class="col-3 text-end">
                <button class="btn btn-outline-primary btn-sm move-to-cart" data-index="${index}">Move to Cart</button>
                <button class="btn btn-danger btn-sm remove-item ms-2" data-index="${index}">Remove</button>
            </div>
        </div>
        <hr />
    `).join('');

    // Add event listeners for move to cart and remove buttons
    document.querySelectorAll('.move-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            moveToCart(wishlist[index], index);
        });
    });

    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            wishlist.splice(index, 1);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            displayWishlist(); // Refresh the display
        });
    });
}

// Move item from wishlist to cart
function moveToCart(item, index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // Create cart item with default size and quantity
    const cartItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.img,
        size: 'M', // Default size
        quantity: 1,
        category: item.category
    };

    // Check if item already exists in cart
    const existingItem = cart.find(cItem => cItem.id === item.id && cItem.size === 'M');

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(cartItem);
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Remove from wishlist
    wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    alert(`${item.name} moved to cart!`);
    displayWishlist(); // Refresh the display
}

// Load wishlist when page loads
document.addEventListener('DOMContentLoaded', displayWishlist);
