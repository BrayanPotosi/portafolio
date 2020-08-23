const MENU = document.querySelector('.menu')
const BURGER_BUTTON = document.querySelector('#burger_button')

BURGER_BUTTON.addEventListener('click', () => {
    (menu.classList.contains('is-active'))
    ?menu.classList.remove('is-active')
    :menu.classList.add('is-active')
})