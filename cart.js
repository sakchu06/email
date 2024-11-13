document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const clearCartBtn = document.querySelector('.clear-cart-btn');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCart();

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        cart.forEach((item, index) => {
            totalPrice += item.price;
            const cartItem = document.createElement('li');
            cartItem.innerHTML = `
                <div><img src="${item.image}" alt="${item.name}" width="50px"> ${item.name}</div>
                <div>Rs. ${item.price} <button class="remove-btn" data-index="${index}">Remove</button></div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        cartTotalPrice.textContent = `Rs. ${totalPrice}`;

        // Attach remove event to each button
        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCart();
            });
        });
    }

    // Clear cart
    clearCartBtn.addEventListener('click', () => {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    });
});
$(document).ready(function() {
    $('#booking-form').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values of the booking form
        const bookingDate = $('#booking-date').val();
        const bookingWeek = $('#booking-week').val();
        const bookingTime = $('#booking-time').val();

        // Basic validation
        if (!bookingDate || !bookingWeek || !bookingTime) {
            alert('Please fill in all fields!');
            return;
        }

        // Store the booking data in localStorage (optional, for persistence)
        localStorage.setItem('bookingDate', bookingDate);
        localStorage.setItem('bookingWeek', bookingWeek);
        localStorage.setItem('bookingTime', bookingTime);

        // Redirect to the booking confirmation page
        window.location.href = 'booking.html';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.querySelector(".cart-items");
    const cartTotalPrice = document.getElementById("cart-total-price");

    // Load cart items from local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    // Display each cart item
    cart.forEach(item => {
        const itemElement = document.createElement("li");
        itemElement.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

        itemElement.innerHTML = `
            <div>
                <img src="${item.image}" alt="${item.name}" style="width: 50px; margin-right: 10px;">
                <span>${item.name}</span>
            </div>
            <span>₹${item.price}</span>
        `;

        cartContainer.appendChild(itemElement);
        total += item.price;
    });

    // Update the total price
    cartTotalPrice.textContent = `₹${total}`;

    // Clear Cart functionality
    document.querySelector(".clear-cart-btn").addEventListener("click", function () {
        localStorage.removeItem("cart");
        cartContainer.innerHTML = "";
        cartTotalPrice.textContent = "₹0";
    });
});
