/* =========================================================
   ShopEasy - Complete JavaScript
   File: shopy.js
   ========================================================= */


/* ================= PRODUCT DATA ================= */

const products = [

    {
        id: 1,
        name: "Apple iPhone 15",
        price: 69999,
        category: "Mobiles",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",
        description: "Apple iPhone 15 with powerful performance, beautiful display and advanced camera system."
    },

    {
        id: 2,
        name: "Samsung Galaxy S24",
        price: 74999,
        category: "Mobiles",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
        description: "Samsung Galaxy S24 with premium design, powerful processor and excellent camera."
    },

    {
        id: 3,
        name: "Google Pixel 9",
        price: 79999,
        category: "Mobiles",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
        description: "Google Pixel smartphone with smart AI features and amazing photography."
    },

    {
        id: 4,
        name: "OnePlus 13",
        price: 64999,
        category: "Mobiles",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
        description: "Fast and powerful OnePlus smartphone with smooth performance."
    },

    {
        id: 5,
        name: "MacBook Air M2",
        price: 89999,
        category: "Laptops",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
        description: "Apple MacBook Air powered by M2 chip with excellent battery life."
    },

    {
        id: 6,
        name: "Dell XPS 13",
        price: 109999,
        category: "Laptops",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
        description: "Premium Dell laptop designed for productivity and performance."
    },

    {
        id: 7,
        name: "HP Pavilion 15",
        price: 62999,
        category: "Laptops",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
        description: "Reliable HP laptop suitable for study, work and entertainment."
    },

    {
        id: 8,
        name: "Lenovo IdeaPad Slim",
        price: 54999,
        category: "Laptops",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?auto=format&fit=crop&w=800&q=80",
        description: "Slim and lightweight laptop for everyday computing."
    },

    {
        id: 9,
        name: "Sony WH-1000XM5",
        price: 29999,
        category: "Audio",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
        description: "Premium wireless headphones with industry-leading noise cancellation."
    },

    {
        id: 10,
        name: "AirPods Pro 2",
        price: 24999,
        category: "Audio",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80",
        description: "Apple AirPods Pro with active noise cancellation and great sound."
    },

    {
        id: 11,
        name: "JBL Bluetooth Speaker",
        price: 8999,
        category: "Audio",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
        description: "Portable JBL speaker delivering powerful and balanced audio."
    },

    {
        id: 12,
        name: "Boat Airdopes 141",
        price: 1299,
        category: "Audio",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80",
        description: "Affordable wireless earbuds with long battery life."
    },

    {
        id: 13,
        name: "Apple Watch Series 9",
        price: 39999,
        category: "Wearables",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=800&q=80",
        description: "Smartwatch with fitness tracking, notifications and health features."
    },

    {
        id: 14,
        name: "Samsung Galaxy Watch",
        price: 24999,
        category: "Wearables",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        description: "Samsung smartwatch with health tracking and smart features."
    },

    {
        id: 15,
        name: "Logitech Wireless Mouse",
        price: 1499,
        category: "Accessories",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
        description: "Comfortable wireless mouse for work and everyday computing."
    },

    {
        id: 16,
        name: "Mechanical Gaming Keyboard",
        price: 3999,
        category: "Accessories",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
        description: "Mechanical keyboard designed for gaming and productivity."
    },

    {
        id: 17,
        name: "Anker Power Bank",
        price: 2499,
        category: "Accessories",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1609592424930-ef5b0e1d9f68?auto=format&fit=crop&w=800&q=80",
        description: "High-capacity power bank for charging your devices anywhere."
    },

    {
        id: 18,
        name: "USB-C Fast Charger",
        price: 999,
        category: "Accessories",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
        description: "Compact USB-C charger with fast charging support."
    },

    {
        id: 19,
        name: "Samsung 4K Smart TV",
        price: 54999,
        category: "TV",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
        description: "Samsung 4K Smart TV with beautiful picture quality and smart features."
    },

    {
        id: 20,
        name: "Sony 55 Inch OLED TV",
        price: 119999,
        category: "TV",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
        description: "Premium Sony OLED TV with stunning colors and cinematic picture quality."
    }

];


/* ================= STORAGE ================= */

let cart = JSON.parse(localStorage.getItem("shopEasyCart")) || [];

let wishlist =
    JSON.parse(localStorage.getItem("shopEasyWishlist")) || [];

let users =
    JSON.parse(localStorage.getItem("shopEasyUsers")) || [];

let currentUser =
    JSON.parse(localStorage.getItem("shopEasyCurrentUser")) || null;

let appliedCoupon = false;


/* ================= DOM ================= */

const trendingProducts =
    document.getElementById("trendingProducts");

const productsGrid =
    document.getElementById("productsGrid");

const productDetails =
    document.getElementById("productDetails");

const cartContent =
    document.getElementById("cartContent");

const wishlistGrid =
    document.getElementById("wishlistGrid");

const checkoutSummary =
    document.getElementById("checkoutSummary");

const toast =
    document.getElementById("toast");

const cartCount =
    document.getElementById("cartCount");

const wishlistCount =
    document.getElementById("wishlistCount");


/* ================= HELPERS ================= */

function saveData() {
    localStorage.setItem(
        "shopEasyCart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "shopEasyWishlist",
        JSON.stringify(wishlist)
    );

    localStorage.setItem(
        "shopEasyUsers",
        JSON.stringify(users)
    );
}


function formatPrice(price) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(price);
}


function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


function getProduct(id) {
    return products.find(
        product => product.id === Number(id)
    );
}


function getCartQuantity(id) {

    const item = cart.find(
        item => item.id === Number(id)
    );

    return item ? item.quantity : 0;
}


/* ================= COUNTS ================= */

function updateCounts() {

    const totalCart = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    cartCount.textContent = totalCart;

    wishlistCount.textContent = wishlist.length;
}


/* ================= PRODUCT CARD ================= */

function createProductCard(product) {

    const isWishlisted =
        wishlist.includes(product.id);

    return `
        <article class="product-card">

            <div class="product-image-wrap">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                >

                <button
                    class="product-wishlist"
                    onclick="toggleWishlist(${product.id})"
                    title="Wishlist"
                >
                    ${isWishlisted ? "❤️" : "🤍"}
                </button>

            </div>

            <div class="product-info">

                <div class="product-category">
                    ${product.category}
                </div>

                <h3 class="product-title">
                    ${product.name}
                </h3>

                <div class="product-rating">
                    ⭐ ${product.rating}
                    <span>Excellent</span>
                </div>

                <div class="product-price">
                    ${formatPrice(product.price)}
                </div>

                <div class="product-actions">

                    <button
                        onclick="viewProduct(${product.id})"
                    >
                        View
                    </button>

                    <button
                        class="add-cart"
                        onclick="addToCart(${product.id})"
                    >
                        Add Cart
                    </button>

                </div>

            </div>

        </article>
    `;
}


/* ================= RENDER PRODUCTS ================= */

function renderTrending() {

    const trending = products
        .slice()
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 8);

    trendingProducts.innerHTML =
        trending.map(createProductCard).join("");
}


function renderProducts(list = products) {

    if (list.length === 0) {

        productsGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <h2>No Products Found</h2>
                <p>Try another search or category.</p>
            </div>
        `;

        return;
    }

    productsGrid.innerHTML =
        list.map(createProductCard).join("");
}


/* ================= SEARCH & FILTER ================= */

function filterProducts() {

    const search =
        document.getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();

    const category =
        document.getElementById("categoryFilter").value;

    const maxPrice =
        Number(document.getElementById("priceFilter").value);

    const sort =
        document.getElementById("sortFilter").value;

    let filtered = products.filter(product => {

        const matchSearch =
            product.name.toLowerCase().includes(search) ||
            product.category.toLowerCase().includes(search);

        const matchCategory =
            category === "all" ||
            product.category === category;

        const matchPrice =
            product.price <= maxPrice;

        return matchSearch &&
               matchCategory &&
               matchPrice;
    });


    if (sort === "low") {
        filtered.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    renderProducts(filtered);
}


/* ================= PRODUCT DETAILS ================= */

let detailQuantity = 1;

function viewProduct(id) {

    location.hash = `product/${id}`;
}


function renderProductDetails(id) {

    const product = getProduct(id);

    if (!product) {
        productDetails.innerHTML = `
            <div class="empty-state">
                <h2>Product not found</h2>
            </div>
        `;
        return;
    }

    detailQuantity = 1;

    productDetails.innerHTML = `

        <div class="product-detail">

            <div>
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="detail-image"
                >
            </div>

            <div class="detail-info">

                <div class="detail-category">
                    ${product.category}
                </div>

                <h1>${product.name}</h1>

                <div class="product-rating">
                    ⭐ ${product.rating}
                    <span>Customer Rating</span>
                </div>

                <div class="detail-price">
                    ${formatPrice(product.price)}
                </div>

                <p class="detail-description">
                    ${product.description}
                </p>

                <div class="quantity-box">

                    <button onclick="changeDetailQuantity(-1)">
                        −
                    </button>

                    <span id="detailQuantity">
                        1
                    </span>

                    <button onclick="changeDetailQuantity(1)">
                        +
                    </button>

                </div>

                <div class="detail-actions">

                    <button
                        class="btn"
                        onclick="addDetailToCart(${product.id})"
                    >
                        🛒 Add to Cart
                    </button>

                    <button
                        class="btn btn-outline"
                        onclick="toggleWishlist(${product.id})"
                    >
                        ❤️ Wishlist
                    </button>

                    <button
                        class="btn"
                        onclick="buyNow(${product.id})"
                    >
                        Buy Now
                    </button>

                </div>

            </div>

        </div>
    `;
}


function changeDetailQuantity(amount) {

    detailQuantity += amount;

    if (detailQuantity < 1) {
        detailQuantity = 1;
    }

    const element =
        document.getElementById("detailQuantity");

    if (element) {
        element.textContent = detailQuantity;
    }
}


function addDetailToCart(id) {

    for (let i = 0; i < detailQuantity; i++) {
        addToCart(id, false);
    }

    showToast(`${detailQuantity} item(s) added to cart`);
    updateCounts();
}


function buyNow(id) {

    addDetailToCart(id);

    location.hash = "checkout";
}


/* ================= CART ================= */

function addToCart(id, showMessage = true) {

    const product = getProduct(id);

    if (!product) return;

    const existing = cart.find(
        item => item.id === product.id
    );

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            id: product.id,
            quantity: 1
        });
    }

    saveData();
    updateCounts();

    if (showMessage) {
        showToast(`${product.name} added to cart`);
    }
}


function updateCartQuantity(id, change) {

    const item = cart.find(
        item => item.id === Number(id)
    );

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(
            item => item.id !== Number(id)
        );
    }

    saveData();
    updateCounts();
    renderCart();
}


function removeFromCart(id) {

    cart = cart.filter(
        item => item.id !== Number(id)
    );

    saveData();
    updateCounts();
    renderCart();

    showToast("Product removed from cart");
}


function calculateSubtotal() {

    return cart.reduce((total, item) => {

        const product = getProduct(item.id);

        return total +
            (product ? product.price * item.quantity : 0);

    }, 0);
}


function renderCart() {

    if (cart.length === 0) {

        cartContent.innerHTML = `
            <div class="empty-state">

                <div class="empty-state-icon">
                    🛒
                </div>

                <h2>Your Cart is Empty</h2>

                <p>
                    Add some products to your cart.
                </p>

                <br>

                <a href="#products" class="btn">
                    Start Shopping
                </a>

            </div>
        `;

        return;
    }


    const subtotal = calculateSubtotal();

    const discount =
        appliedCoupon
            ? Math.round(subtotal * 0.10)
            : 0;

    const taxableAmount =
        subtotal - discount;

    const tax =
        Math.round(taxableAmount * 0.18);

    const shipping =
        taxableAmount >= 50000 ? 0 : 99;

    const total =
        taxableAmount + tax + shipping;


    cartContent.innerHTML = `

        <div class="cart-layout">

            <div class="cart-items">

                ${cart.map(item => {

                    const product =
                        getProduct(item.id);

                    if (!product) return "";

                    return `
                        <div class="cart-item">

                            <img
                                src="${product.image}"
                                alt="${product.name}"
                            >

                            <div>

                                <h3>
                                    ${product.name}
                                </h3>

                                <div class="cart-item-price">
                                    ${formatPrice(product.price)}
                                </div>

                                <div class="cart-controls">

                                    <button
                                        onclick="updateCartQuantity(${product.id}, -1)"
                                    >
                                        −
                                    </button>

                                    <strong>
                                        ${item.quantity}
                                    </strong>

                                    <button
                                        onclick="updateCartQuantity(${product.id}, 1)"
                                    >
                                        +
                                    </button>

                                </div>

                            </div>

                            <button
                                class="remove-btn"
                                onclick="removeFromCart(${product.id})"
                            >
                                Remove
                            </button>

                        </div>
                    `;

                }).join("")}

            </div>


            <div class="cart-summary">

                <h2>Order Summary</h2>

                <div class="summary-row">
                    <span>Subtotal</span>
                    <strong>${formatPrice(subtotal)}</strong>
                </div>

                <div class="summary-row">
                    <span>Discount</span>
                    <strong>
                        - ${formatPrice(discount)}
                    </strong>
                </div>

                <div class="summary-row">
                    <span>Tax (18%)</span>
                    <strong>${formatPrice(tax)}</strong>
                </div>

                <div class="summary-row">
                    <span>Shipping</span>
                    <strong>
                        ${shipping === 0
                            ? "FREE"
                            : formatPrice(shipping)}
                    </strong>
                </div>


                <div class="coupon-box">

                    <input
                        type="text"
                        id="couponInput"
                        placeholder="Coupon code"
                    >

                    <button onclick="applyCoupon()">
                        Apply
                    </button>

                </div>


                <div class="summary-total">
                    <span>Total</span>
                    <strong>${formatPrice(total)}</strong>
                </div>

                <br>

                <a
                    href="#checkout"
                    class="btn"
                    style="width:100%;"
                >
                    Proceed to Checkout
                </a>

            </div>

        </div>
    `;
}


function applyCoupon() {

    const input =
        document.getElementById("couponInput");

    if (!input) return;

    const code =
        input.value.trim().toUpperCase();

    if (code === "WELCOME10") {

        appliedCoupon = true;

        showToast("Coupon applied: 10% OFF");

        renderCart();

    } else {

        showToast("Invalid coupon code");

    }
}


/* ================= WISHLIST ================= */

function toggleWishlist(id) {

    const index =
        wishlist.indexOf(Number(id));

    const product =
        getProduct(id);

    if (index === -1) {

        wishlist.push(Number(id));

        showToast(`${product.name} added to wishlist`);

    } else {

        wishlist.splice(index, 1);

        showToast(`${product.name} removed from wishlist`);
    }

    saveData();
    updateCounts();

    renderTrending();

    if (location.hash === "#wishlist") {
        renderWishlist();
    }

    if (location.hash.startsWith("#product/")) {
        renderProductDetails(id);
    }
}


function renderWishlist() {

    if (wishlist.length === 0) {

        wishlistGrid.innerHTML = `
            <div class="empty-state">

                <div class="empty-state-icon">
                    ❤️
                </div>

                <h2>Your Wishlist is Empty</h2>

                <p>
                    Save products you love here.
                </p>

                <br>

                <a href="#products" class="btn">
                    Explore Products
                </a>

            </div>
        `;

        return;
    }


    const list = wishlist
        .map(id => getProduct(id))
        .filter(Boolean);

    wishlistGrid.innerHTML =
        list.map(createProductCard).join("");
}


/* ================= CHECKOUT ================= */

function renderCheckout() {

    if (cart.length === 0) {

        checkoutSummary.innerHTML = `
            <div class="checkout-summary">
                <h2>No Products</h2>
                <p>Your cart is empty.</p>
                <br>
                <a href="#products" class="btn">
                    Shop Now
                </a>
            </div>
        `;

        return;
    }


    const subtotal = calculateSubtotal();

    const discount =
        appliedCoupon
            ? Math.round(subtotal * 0.10)
            : 0;

    const taxable =
        subtotal - discount;

    const tax =
        Math.round(taxable * 0.18);

    const shipping =
        taxable >= 50000 ? 0 : 99;

    const total =
        taxable + tax + shipping;


    checkoutSummary.innerHTML = `

        <div class="checkout-summary">

            <h2>Order Summary</h2>

            ${cart.map(item => {

                const product =
                    getProduct(item.id);

                return `
                    <div class="summary-row">

                        <span>
                            ${product.name}
                            × ${item.quantity}
                        </span>

                        <strong>
                            ${formatPrice(
                                product.price *
                                item.quantity
                            )}
                        </strong>

                    </div>
                `;

            }).join("")}


            <div class="summary-row">
                <span>Subtotal</span>
                <strong>${formatPrice(subtotal)}</strong>
            </div>

            <div class="summary-row">
                <span>Discount</span>
                <strong>
                    - ${formatPrice(discount)}
                </strong>
            </div>

            <div class="summary-row">
                <span>Tax</span>
                <strong>${formatPrice(tax)}</strong>
            </div>

            <div class="summary-row">
                <span>Shipping</span>
                <strong>
                    ${shipping === 0
                        ? "FREE"
                        : formatPrice(shipping)}
                </strong>
            </div>

            <div class="summary-row summary-total">
                <span>Total</span>
                <strong>${formatPrice(total)}</strong>
            </div>

        </div>
    `;
}


/* ================= ORDER ================= */

function placeOrder(event) {

    event.preventDefault();

    if (cart.length === 0) {

        showToast("Your cart is empty");

        return;
    }


    const name =
        document.getElementById("checkoutName").value.trim();

    const phone =
        document.getElementById("checkoutPhone").value.trim();

    const email =
        document.getElementById("checkoutEmail").value.trim();

    const address =
        document.getElementById("checkoutAddress").value.trim();

    const city =
        document.getElementById("checkoutCity").value.trim();

    const pincode =
        document.getElementById("checkoutPincode").value.trim();


    if (!name ||
        !phone ||
        !email ||
        !address ||
        !city ||
        !pincode) {

        showToast("Please fill all details");

        return;
    }


    if (!/^[0-9]{10}$/.test(phone)) {

        showToast("Enter a valid 10-digit phone number");

        return;
    }


    if (!/^[0-9]{6}$/.test(pincode)) {

        showToast("Enter a valid 6-digit pincode");

        return;
    }


    const orderId =
        "SE" +
        Date.now().toString().slice(-8);


    document.getElementById("orderNumber").textContent =
        `Order ID: ${orderId}`;


    cart = [];

    appliedCoupon = false;

    saveData();
    updateCounts();

    location.hash = "success";
}


/* ================= LOGIN ================= */

function handleLogin(event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value
            .trim()
            .toLowerCase();

    const password =
        document.getElementById("loginPassword").value;


    const user =
        users.find(
            user =>
                user.email === email &&
                user.password === password
        );


    if (!user) {

        showToast("Invalid email or password");

        return;
    }


    currentUser = user;

    localStorage.setItem(
        "shopEasyCurrentUser",
        JSON.stringify(user)
    );

    showToast("Login successful");

    location.hash = "home";
}


/* ================= REGISTER ================= */

function handleRegister(event) {

    event.preventDefault();

    const name =
        document.getElementById("registerName").value.trim();

    const email =
        document.getElementById("registerEmail").value
            .trim()
            .toLowerCase();

    const password =
        document.getElementById("registerPassword").value;

    const confirm =
        document.getElementById("registerConfirm").value;


    if (password.length < 6) {

        showToast("Password must be at least 6 characters");

        return;
    }


    if (password !== confirm) {

        showToast("Passwords do not match");

        return;
    }


    const exists =
        users.some(user => user.email === email);


    if (exists) {

        showToast("Email already registered");

        return;
    }


    const newUser = {
        id: Date.now(),
        name,
        email,
        password
    };


    users.push(newUser);

    saveData();

    showToast("Account created successfully");

    location.hash = "login";
}


/* ================= NEWSLETTER ================= */

function handleNewsletter(event) {

    event.preventDefault();

    const email =
        document.getElementById("newsletterEmail").value.trim();

    if (!email) return;

    showToast("Successfully subscribed!");

    event.target.reset();
}


/* ================= THEME ================= */

function loadTheme() {

    const theme =
        localStorage.getItem("shopEasyTheme");

    if (theme === "dark") {

        document.body.classList.add("dark");

        document.getElementById("themeBtn").textContent =
            "☀️";

    } else {

        document.getElementById("themeBtn").textContent =
            "🌙";
    }
}


function toggleTheme() {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "shopEasyTheme",
        isDark ? "dark" : "light"
    );

    document.getElementById("themeBtn").textContent =
        isDark ? "☀️" : "🌙";
}


/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const nav =
        document.getElementById("navLinks");

    nav.classList.toggle("active");
}


/* ================= ROUTER ================= */

function hideAllPages() {

    document
        .querySelectorAll(".page")
        .forEach(page => {
            page.classList.add("hidden");
        });
}


function showPage(id) {

    hideAllPages();

    const page =
        document.getElementById(id);

    if (page) {
        page.classList.remove("hidden");
    }
}


function router() {

    let hash =
        location.hash.substring(1);

    if (!hash) {
        hash = "home";
    }


    if (hash === "home") {

        showPage("homePage");

        renderTrending();

        return;
    }


    if (hash === "products") {

        showPage("productsPage");

        renderProducts();

        return;
    }


    if (hash.startsWith("product/")) {

        const id =
            hash.split("/")[1];

        showPage("productPage");

        renderProductDetails(id);

        return;
    }


    if (hash === "cart") {

        showPage("cartPage");

        renderCart();

        return;
    }


    if (hash === "wishlist") {

        showPage("wishlistPage");

        renderWishlist();

        return;
    }


    if (hash === "checkout") {

        showPage("checkoutPage");

        renderCheckout();

        return;
    }


    if (hash === "login") {

        showPage("loginPage");

        return;
    }


    if (hash === "register") {

        showPage("registerPage");

        return;
    }


    if (hash === "success") {

        showPage("successPage");

        return;
    }


    location.hash = "home";
}


/* ================= EVENT LISTENERS ================= */

document.addEventListener("DOMContentLoaded", () => {

    updateCounts();

    loadTheme();

    router();


    document
        .getElementById("themeBtn")
        .addEventListener(
            "click",
            toggleTheme
        );


    document
        .getElementById("menuBtn")
        .addEventListener(
            "click",
            toggleMenu
        );


    document
        .getElementById("newsletterForm")
        .addEventListener(
            "submit",
            handleNewsletter
        );


    document
        .getElementById("loginForm")
        .addEventListener(
            "submit",
            handleLogin
        );


    document
        .getElementById("registerForm")
        .addEventListener(
            "submit",
            handleRegister
        );


    document
        .getElementById("checkoutForm")
        .addEventListener(
            "submit",
            placeOrder
        );


    document
        .getElementById("searchInput")
        .addEventListener(
            "input",
            filterProducts
        );


    document
        .getElementById("categoryFilter")
        .addEventListener(
            "change",
            filterProducts
        );


    document
        .getElementById("sortFilter")
        .addEventListener(
            "change",
            filterProducts
        );


    document
        .getElementById("priceFilter")
        .addEventListener(
            "input",
            function () {

                const price =
                    Number(this.value);

                document.getElementById(
                    "priceValue"
                ).textContent =
                    formatPrice(price);

                filterProducts();
            }
        );


    document
        .querySelectorAll(".category-card")
        .forEach(card => {

            card.addEventListener("click", () => {

                const category =
                    card.dataset.category;

                setTimeout(() => {

                    const select =
                        document.getElementById(
                            "categoryFilter"
                        );

                    if (select) {

                        select.value =
                            category;

                        filterProducts();
                    }

                }, 50);
            });

        });


    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", () => {

                document
                    .getElementById("navLinks")
                    .classList.remove("active");

            });

        });

});


window.addEventListener(
    "hashchange",
    router
);


/* ================= INITIAL DATA ================= */

updateCounts();