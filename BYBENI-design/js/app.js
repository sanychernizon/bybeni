function toggleNav() {
    let menuMobile = document.getElementById('menu-m');
    let mainMobile = document.querySelector('.main-content')
    let menuBurger = document.getElementById('hamburger');

    menuMobile.classList.toggle('menu-on');
    mainMobile.classList.toggle('main-on');
    menuBurger.classList.toggle('is-active');
}

function openCart() {
    let cart = document.querySelector('.cart-container');
    let overlay = document.querySelector('.overlay');
    
    cart.classList.add('cart-open')
    overlay.style.display = 'initial'
    overlay.addEventListener('click', closeCart)
}

function closeCart() {
    let cart = document.querySelector('.cart-container');
    let overlay = document.querySelector('.overlay');
    
    cart.classList.remove('cart-open')
    overlay.style.display = 'none'
}