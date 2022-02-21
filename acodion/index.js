const ulEl = document.querySelector('.jsUl');
const liEls = document.querySelectorAll('.jsLi');
const jsBtn = document.querySelector('.jsBtn');

$(function(){

  $('.jqueryBtn').on('click', function(){
    $('.jqueryUl').toggleClass('on');
  })

  $('.jqueryAnchor').on('click', function(){
    $('.jqueryAnchor').next('ul').stop().slideUp(300);
    $(this).next('ul').stop().slideToggle(300);
  })
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

