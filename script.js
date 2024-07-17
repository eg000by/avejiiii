function toggleMenu() {
    const nav = document.querySelector('nav');
    const burger = document.querySelector('.burger-menu');
    nav.classList.toggle('show');
    burger.classList.toggle('close');
}