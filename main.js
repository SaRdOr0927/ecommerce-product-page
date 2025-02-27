let quantity = 0;
const price = 125;
let cartCount = 0;
let totalPrice = 0;
let cartItems = [];

function increaseQuantity() {
    quantity++;
    updateUI();
}

function decreaseQuantity() {
    if (quantity > 0) {
        quantity--;
    }
    updateUI();
}

function addToCart() {
    if (quantity > 0) {
        cartCount += quantity;
        totalPrice += quantity * price;
        cartItems.push({ name: "Fall Limited Edition Sneakers", price: price, quantity: quantity });
        quantity = 0;
        updateUI();
    }
}

function toggleCart() {
    const cart = document.getElementById("cart");
    if (cartItems.length > 0) {
        document.getElementById("cart-items").innerHTML = cartItems.map(item =>
            `<div class="cart-item">
                <img src="./IMG/phote1.png" alt="Rectangle" id="abount-phote__img__menu__icon">
                <span>${item.name} <br> $${item.price} x ${item.quantity} <strong>$${item.price * item.quantity}</strong></span>
            </div>`
        ).join('');
        cart.style.display = "block";
    } else {
        cart.style.display = "none";
    }
}
//
function updateUI() {
    document.getElementById("quantity").innerText = quantity;
    document.getElementById("cart-count").innerText = cartCount;
    document.getElementById("total-price").innerText = totalPrice;
    const cartCountElement = document.getElementById("cart-count");
    if (cartCount > 0) {
        cartCountElement.style.display = "block";
    } else {
        cartCountElement.style.display = "none";
    }
}
function checkout() {
    const cartItems = document.getElementById("cart-items");
    if (cartItems) {
        cartItems.innerHTML = ""; // Savatchani bo‘shatish
    }
    const cartTotal = document.getElementById("cart-total");
    if (cartTotal) {
        cartTotal.textContent = "$0.00"; // Umumiy narxni $0 qilish
    }
    location.reload(); // Sahifani yangilash
}




// Savatchadan mahsulot o‘chirish



