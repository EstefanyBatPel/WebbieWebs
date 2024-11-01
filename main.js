const menu_icon = document.querySelector('.menu_icon');
const menu = document.querySelector('.menu');

menu_icon.addEventListener('click', () => {
    menu.classList.toggle('active');
});