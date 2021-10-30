// Write Javascript code here!

// 내가 쓴 방식

// const items = document.querySelectorAll('.item');

// items.forEach(item => {
//   item.addEventListener('click', e => {
//     const siblings = t => [...t.parentElement.children].filter(e => e != t);

//     const closeItems = siblings(item);

//     closeItems.forEach(close => {
//       close.classList.remove('open');
//     })

//     e.currentTarget.classList.toggle('open');
//   })
// })

// 첫 예제의 방식

// const items = document.querySelectorAll('.item');

// items.forEach(function(item) {
//   item.addEventListener('click', function(e) {
//     item.classList.toggle('open');

//     items.forEach(function(elem) {
//       if (elem !== item) elem.classList.remove('open');
//     })
//   })
// })

// 이벤트 객체가 만약 100개나 된다고 치면 위 방법은 엄청 비효율적이라고 함
// 이벤트 감지를 100개나 하고있어야하기 때문이라고 한다.

// 좋은 방식의 예

const wrapper = document.querySelector('.wrapper');
const items = document.querySelectorAll('.item');

// wrapper.addEventListener('click', function(e) {
//   const targetElem = e.target; // 클릭한 요소
//   e.stopPropagation();

//   if (!targetElem.classList.contains('item')) return;
//   // 만약에 클릭한 요소가 item을 가지고있지 않다면 아무동작도 하지않게 한다.

//   targetElem.classList.toggle('open');

//   items.forEach(function(elem) {
//     if (elem !== targetElem) elem.classList.remove('open');
//   })
// })

// document.body.addEventListener('click', function(e) {
//   if (e.target.classList.contains('context')) return;

//   items.forEach(function(elem) {
//     elem.classList.remove('open');
//   })
// })

// 더 줄이기

document.body.addEventListener('click', function(e) {
// body에다가 이벤트를 건다.
  const targetClassList = e.target.classList;
  // 현재 클릭한 녀석의 클래스를 담고

  if (targetClassList.contains('context')) return;
  // 그녀석이 context면 그냥 나가구
  
  if (targetClassList.contains('item')) {
  // 아이템이면
    targetClassList.toggle('open');
    // 토글클래스를 부여

    items.forEach(function(elem) {
    // forEach를 돌려서
      if (elem !== e.target) elem.classList.remove('open');
      // 현재 item과 클릭한 애가 다르면 open을 빼버린다.
    });
    return;
    // 그러고 나가고
  }

  items.forEach(function(elem) {
    elem.classList.remove('open');
  })

  // 근데 저 위에 조건들이 다 아니면 싹다 open 이라는 클래스 빼버리고
})