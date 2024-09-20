// Navbar media element
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

// check if navbar already opened
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

// close navbar
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Add functionality for cart icons
const cartIcons = document.querySelectorAll('.cart');

cartIcons.forEach(cart => {
    cart.addEventListener('click', () => {
        alert('Item added to cart');
    });
});
