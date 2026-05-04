// Display cart items
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('cart-items-container');
    const emptyMessage = document.getElementById('empty-cart-message');

    if (cart.length === 0) {
        container.innerHTML = '';
        emptyMessage.style.display = 'block';
        updateSummary(cart);
        return;
    }

    emptyMessage.style.display = 'none';

    container.innerHTML = cart.map((item, index) => `
        <div class="d-flex align-items-center mb-4 px-2 cart-item" data-index="${index}">
            <div class="col-6 d-flex align-items-center">
                <div style="width: 100px; height: 100px; border: 2px solid #000; display: flex; align-items: center; justify-content: center; margin-right: 20px; overflow: hidden;">
                    <img src="${item.img}" alt="${item.name}" style="width:100%; height:100%; object-fit: cover;">
                </div>
                <div>
                    <p class="mb-1 fw-medium" style="font-size: 18px;">${item.name}</p>
                    <p class="mb-0" style="font-size: 16px;">Size: ${item.size}</p>
                </div>
            </div>
            <div class="col-2" style="font-size: 16px;">${item.price}</div>
            <div class="col-2">
                <input type="number" value="${item.quantity}" min="1" class="form-control quantity-input" style="width: 70px;" data-index="${index}">
            </div>
            <div class="col-2 text-end">
                <button class="btn btn-danger btn-sm remove-item" data-index="${index}">Remove</button>
            </div>
        </div>
        <hr />
    `).join('');

    // Add event listeners for quantity changes and remove buttons
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const index = e.target.dataset.index;
            const newQuantity = parseInt(e.target.value);
            if (newQuantity > 0) {
                cart[index].quantity = newQuantity;
                localStorage.setItem('cart', JSON.stringify(cart));
                updateSummary(cart);
            }
        });
    });

    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCart(); // Refresh the display
        });
    });

    updateSummary(cart);
}

// Update summary section
function updateSummary(cart) {
    let subtotal = 0;

    cart.forEach(item => {
        // Extract numeric price (remove ₱ and commas)
        const price = parseFloat(item.price.replace(/[₱,]/g, ''));
        subtotal += price * item.quantity;
    });

    const shipping = cart.length > 0 ? 150 : 0;
    const taxes = Math.round(subtotal * 0.12); // 12% tax
    const total = subtotal + shipping + taxes;

    // Format currency
    const formatPrice = (price) => `₱${price.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    document.getElementById('item-count').textContent = cart.length;
    document.getElementById('subtotal').textContent = formatPrice(subtotal);
    document.getElementById('summary-subtotal').textContent = formatPrice(subtotal);
    document.getElementById('summary-shipping').textContent = cart.length > 0 ? formatPrice(shipping) : '₱0.00';
    document.getElementById('summary-taxes').textContent = formatPrice(taxes);
    document.getElementById('summary-total').textContent = formatPrice(total);
}

// Load cart when page loads
document.addEventListener('DOMContentLoaded', displayCart);
