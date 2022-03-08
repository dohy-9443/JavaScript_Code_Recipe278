const wrapper = document.querySelector('.wrapper');
const pagingBtns = document.querySelectorAll('.paging .btn');

let firstX;
let lastX;
var i = 0;
wrapper.style.width = `${pagingBtns.length * 100 - 50}%`
wrapper.style.transform = `translateX(-5%)`;

pagingBtns.forEach((item, index) => {
  
  item.addEventListener('click', function() {
    i = index;
    pagingBtns.forEach((reItem) => {
      reItem.classList.remove('active');
    })

    pagingBtns[i].classList.add('active');

    wrapper.style.transform = `translateX(${-i * 100/pagingBtns.length }%)`;
    
    console.log('현재 i 는 ? ', i)
  })

})
  
wrapper.addEventListener('touchstart', (e) => {
  let x = e.touches[0].clientX;
  firstX = x;
  return firstX;
}, false);

wrapper.addEventListener('touchend', (e) => {
  let x = e.changedTouches[0].clientX;
  lastX = x;
  
  if (firstX > lastX) {
    console.log(i)
    if (0 <= i && i < 3) {
      i++;
      
      pagingBtns.forEach((reItem) => {
        reItem.classList.remove('active');
      })
  
      pagingBtns[i].classList.add('active');
  
      wrapper.style.transform = `translateX(${-i * 100/pagingBtns.length}%)`;
    } else if (i === 3) {
      i = 4;
      pagingBtns.forEach((reItem) => {
        reItem.classList.remove('active');
      })
  
      pagingBtns[i].classList.add('active');
  
      wrapper.style.transform = `translateX(${-i * 100/pagingBtns.length}%)`;
    }

  } else {
    if (0 < i && i <= 4) {
      i--;
      
      pagingBtns.forEach((reItem) => {
        reItem.classList.remove('active');
      })
  
      pagingBtns[i].classList.add('active');
  
      wrapper.style.transform = `translateX(${-i * 100/pagingBtns.length }%)`;
    } else if (i === 0) {
      i = 0;
      pagingBtns.forEach((reItem) => {
        reItem.classList.remove('active');
      })
  
      pagingBtns[i].classList.add('active');
  
      wrapper.style.transform = `translateX(${-i * 100/pagingBtns.length }%)`;
    }
    console.log('이건 왼쪽?')
  }

}, false)

// wrapper.addEventListener('drag', (e) => { console.log('나는 걍 드래그', e) }, false)

wrapper.addEventListener('mousedown', (e) => {
  let x = e.clientX;

  firstX = x;
  console.log('나는 시작',e.clientX)
  return firstX
}, false)

wrapper.addEventListener('dragend', (e) => {
  console.log('나는 끝',e.clientX)
  let x = e.clientX
  lastX = x;

  if (firstX > lastX) {
    console.log(i)
    if (0 <= i && i < 3) {
      i++;
      
      pagingBtns.forEach((reItem) => {
        reItem.classList.remove('active');
      })
  
      pagingBtns[i].classList.add('active');
  
      wrapper.style.transform = `translateX(${-i * 100/pagingBtns.length }%)`;
    } else if (i === 3) {
      i = 4;
      pagingBtns.forEach((reItem) => {
        reItem.classList.remove('active');
      })
  
      pagingBtns[i].classList.add('active');
  
      wrapper.style.transform = `translateX(${-i * 100/pagingBtns.length }%)`;
    }

  } else {
    if (0 < i && i <= 4) {
      i--;
      
      pagingBtns.forEach((reItem) => {
        reItem.classList.remove('active');
      })
  
      pagingBtns[i].classList.add('active');
  
      wrapper.style.transform = `translateX(${-i * 100/pagingBtns.length }%)`;
    } else if (i === 0) {
      i = 0;
      pagingBtns.forEach((reItem) => {
        reItem.classList.remove('active');
      })
  
      pagingBtns[i].classList.add('active');
  
      wrapper.style.transform = `translateX(${-i * 100/pagingBtns.length }%)`;
    }
    console.log('이건 왼쪽?')
  }
}, false)



// nextBtn.addEventListener('click', function() {
  
//   if (clickNum === count -1) {
//     clickNum = count -1
//     wrapper.style.transform = `translateX(${-clickNum * 100/pagingBtns.length})`;
//   } else {
//     clickNum++
//     wrapper.style.transform = `translateX(${-clickNum * 100/pagingBtns.length}%)`;
//     pagingBtns.forEach((item) => {
//       item.classList.remove('active');
//     })
//     pagingBtns[clickNum].classList.add('active');
//   }
// })

// prevBtn.addEventListener('click', function() {
//   if (clickNum === 0) {
//     clickNum = 0;
//     wrapper.style.transform = `translateX(${-clickNum * 100/pagingBtns.length})`;
//   } else {
//     clickNum--;
//     wrapper.style.transform = `translateX(${-clickNum * 100/pagingBtns.length}%)`;
//     pagingBtns.forEach((item) => {
//       item.classList.remove('active');
//     })
//     pagingBtns[clickNum].classList.add('active');
//   }
// })
