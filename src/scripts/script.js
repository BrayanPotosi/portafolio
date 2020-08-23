const MENU = document.querySelector('.menu')
const BURGER_BUTTON = document.querySelector('#burger_button')

BURGER_BUTTON.addEventListener('click', () => {
    (MENU.classList.contains('is-active'))
    ?MENU.classList.remove('is-active')
    :MENU.classList.add('is-active')
})