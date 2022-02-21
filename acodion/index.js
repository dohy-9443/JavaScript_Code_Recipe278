$(function(){
  $('.jqueryAnchor').on('click', function(){
    $('.jqueryAnchor').next('ul').stop().slideUp(300);
    $(this).next('ul').stop().slideToggle(300);
  })
})

const ulEl = document.querySelector('.jsUl');
const liEls = document.querySelectorAll('.jsLi');

function acodionClick (e) {
  const target = e.target;
  // console.log(target)
  if (target.classList.contains('jsAnchor')) {
    target.parentNode.classList.toggle('on');

    liEls.forEach((item) => {
      if (e.target.parentNode !== item) item.classList.remove('on');
    })
  }
}

ulEl.addEventListener('click', acodionClick)

