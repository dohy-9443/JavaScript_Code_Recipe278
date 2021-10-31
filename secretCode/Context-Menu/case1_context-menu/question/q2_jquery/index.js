// Import stylesheets

// Write JQuery code here!

const wrapper = $('.wrapper');
const items = wrapper.find('.item');

wrapper.on('click', '.item', function(e) {
// wrapper에서 클릭이벤트가 진행되긴한데 실제로는 
// 타겟이 .item에 해당될 때만 click 이벤트가 진행된다고 한다.

  e.stopPropagation();
  $(this).toggleClass('open').siblings().removeClass('open');
})

$('body').on('click', function(){
  items.removeClass('open');
})

// 조금더 짧게 쓰는 방법

// $('body').on('click', function(e) {
//   const item = $(e.target);

//   if (item.is('.item')) {
//     item.toggleClass('open').siblings().removeClass('open');
//   } else {
//     items.removeClass('open');
//   }
// })