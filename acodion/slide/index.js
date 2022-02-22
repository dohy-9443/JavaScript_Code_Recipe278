const wrapper = document.querySelector('.wrapper');
const pagingBtns = document.querySelectorAll('.paging .btn');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let clickNum = 0;
let count = pagingBtns.length;

wrapper.style.width = `${pagingBtns.length * 100}%`
wrapper.style.transform = `translateX(0%)`;

pagingBtns.forEach((item, index) => {
  item.addEventListener('click', function() {

    pagingBtns.forEach((reItem) => {
      reItem.classList.remove('active');
    })

    pagingBtns[index].classList.add('active');

    wrapper.style.transform = `translateX(${-index * 100/pagingBtns.length }%)`;
  })
})

nextBtn.addEventListener('click', function() {
  
  if (clickNum === count -1) {
    clickNum = count -1
    wrapper.style.transform = `translateX(${-clickNum * 100/pagingBtns.length})`;
  } else {
    clickNum++
    wrapper.style.transform = `translateX(${-clickNum * 100/pagingBtns.length}%)`;
    pagingBtns.forEach((item) => {
      item.classList.remove('active');
    })
    pagingBtns[clickNum].classList.add('active');
  }
})

prevBtn.addEventListener('click', function() {
  if (clickNum === 0) {
    clickNum = 0;
    wrapper.style.transform = `translateX(${-clickNum * 100/pagingBtns.length})`;
  } else {
    clickNum--;
    wrapper.style.transform = `translateX(${-clickNum * 100/pagingBtns.length}%)`;
    pagingBtns.forEach((item) => {
      item.classList.remove('active');
    })
    pagingBtns[clickNum].classList.add('active');
  }
})