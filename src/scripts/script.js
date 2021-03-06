const MENU = document.querySelector('.menu')
const BURGER_BUTTON = document.querySelector('#burger_button')

BURGER_BUTTON.addEventListener('click', () => {
    (MENU.classList.contains('is-active'))
    ?MENU.classList.remove('is-active')
    :MENU.classList.add('is-active')
})

$('.carousel[data-type="multi"] .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  
    for (var i=0;i<4;i++) {
      next=next.next();
      if (!next.length) {
          next = $(this).siblings(':first');
        }
      
      next.children(':first-child').clone().appendTo($(this));
    }
  });