function toggleNav() {
    let menuMobile = document.getElementById('menu-m');
    let mainMobile = document.querySelector('.main-content')
    let menuBurger = document.getElementById('hamburger');

    menuMobile.classList.toggle('menu-on');
    mainMobile.classList.toggle('main-on');
    menuBurger.classList.toggle('is-active');
}