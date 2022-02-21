const ulEl = document.querySelector('.jsUl');
const jqueryUl = document.querySelector('.jqueryUl');
const liEls = document.querySelectorAll('.jsLi');
const jqueryBtn = document.querySelector('.jqueryBtn');
const jsBtn = document.querySelector('.jsBtn');

$(function(){
  $('.jqueryAnchor').on('click', function(){
    $('.jqueryAnchor').next('ul').stop().slideUp(300);
    $(this).next('ul').stop().slideToggle(300);
  })
})

jqueryBtn.addEventListener('click', function() {
  jqueryUl.classList.toggle('on');
})

jsBtn.addEventListener('click', function() {
  ulEl.classList.toggle('on')
})

function acodionClick (e) {
  const target = e.target;
  if (target.classList.contains('jsAnchor')) {
    target.parentNode.classList.toggle('on');

    liEls.forEach((item) => {
      if (e.target.parentNode !== item) item.classList.remove('on');
    })
  }
}

ulEl.addEventListener('click', acodionClick)

