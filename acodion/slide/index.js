// DOM 요소 
const wrapper = document.querySelector('.wrapper'); // slide 감싸고 있는 애
const slides = document.querySelectorAll('.wrapper .slide'); // 슬라이드들
const pagingBtns = document.querySelectorAll('.paging .btn'); // paging 버튼들
const nextBtn = document.querySelector('.next'); // next 버튼
const prevBtn = document.querySelector('.prev'); // prev 버튼

function imgSlide(w, p) {
  
  let firstX; // drag , touch 시작 x 값 담을 변수
  let lastX; // drag , touch 마지막 x 값 담을 변수
  var i = 0; // 슬라이드 현재 버튼 변수


  w.style.width = `${p.length * 100 / 3}%` // 시작할 때 슬라이드 감싸는 div 넓이값
  w.style.transform = `translateX(10%)`; // 시작할 때 슬라이드 감싸는 div translate 값

  // pagination 버튼 클릭부터 시작
  p.forEach((item, index) => {
    
    // 버튼 클릭 이벤트
    item.addEventListener('click', function() {
      // i 에 현재 index 담고
      i = index;

      // paging 초기화
      p.forEach((reItem) => {
        reItem.classList.remove('active');
      })

      // slide 초기화
      slides.forEach((s) => {
        s.classList.remove('active');
      })

      // 슬라이드 현재 index한테 active
      slides[i].classList.add('active');

      // 페이징 현재 index한테 active
      p[i].classList.add('active');
      
      // 슬라이드 현재 index만큼 이동
      w.style.transform = `translateX(${-i * 100/p.length + 10 }%)`;
      
    })

  })
  
  // 터치 이벤트 시작
  w.addEventListener('touchstart', (e) => {
    // 시작점 x 값 담고
    let x = e.touches[0].clientX;

    // 위에 선언한 처음 x값 담고
    firstX = x;

    // 그 값 return
    return firstX;
  }, false);

  w.addEventListener('touchend', (e) => {

    // 터치 땐 x 값 담고
    let x = e.changedTouches[0].clientX;

    // 그 값을 위에 선언한 마지막 x 값 담고
    lastX = x;
    
    // 시작값이 마지막값보다 크면
    if (firstX > lastX) {
      // 그러면 슬라이드가 오른쪽에서 왼쪽으로 작동 1 -> 2 -> 3

      // i 가 0이랑 같거나 크고 i 가 슬라이드 갯수보다 2개 적을 때
      if (0 <= i && i < p.length - 2) {

        i++; // i = i + 1
        
        // 초기화
        p.forEach((reItem) => {
          reItem.classList.remove('active');
        })
        slides.forEach((s) => {
          s.classList.remove('active');
        })

        // 현재 슬라이드랑 페이징에 active
        slides[i].classList.add('active');
        p[i].classList.add('active');
    
        // 슬라이드 이동
        w.style.transform = `translateX(${-i * 100/p.length + 10}%)`;

        // i가 슬라이드 갯수 - 2 적을 때 ( 마지막 슬라이드 )
      } else if (i === p.length - 2) {
        i = p.length - 1; // 맨 마지막 index

        // 초기화
        p.forEach((reItem) => {
          reItem.classList.remove('active');
        })
        slides.forEach((s) => {
          s.classList.remove('active');
        })

        // 현재 슬라이드랑 페이징에 active
        slides[i].classList.add('active');
        p[i].classList.add('active');
    
        // 슬라이드 이동
        w.style.transform = `translateX(${-i * 100/p.length + 10}%)`;
      }

    // 시작값이 마지막값보다 작으면
    } else {
      // 그러면 슬라이드가 왼쪽에서 오른쪽으로 작동 3 -> 2 -> 1

      // i가 0보다 크고 i가 총 장수와 같거나 작을 때
      if (0 < i && i <= p.length - 1) {
        i--; // i = i - 1;
        
        // 초기화
        p.forEach((reItem) => {
          reItem.classList.remove('active');
        })
        slides.forEach((s) => {
          s.classList.remove('active');
        })

        // 똑같은거 이제 안써!
        slides[i].classList.add('active');
        p[i].classList.add('active');
    
        w.style.transform = `translateX(${-i * 100/p.length + 10}%)`;

        // i 가 0 일 때
      } else if (i === 0) {
        i = 0;

        p.forEach((reItem) => {
          reItem.classList.remove('active');
        })
        slides.forEach((s) => {
          s.classList.remove('active');
        })

        slides[i].classList.add('active');
        p[i].classList.add('active');
    
        w.style.transform = `translateX(${-i * 100/p.length + 10}%)`;
      }

    }

  }, false)

  // 이벤트만 pointer로 바뀌고 터치 이벤트랑 똑같음!
  w.addEventListener('pointerdown', (e) => {
    let x = e.clientX;

    firstX = x;

    return firstX
  })

  w.addEventListener('pointerup', (e) => {

    let x = e.clientX
    lastX = x;

    if (firstX > lastX) {

      if (0 <= i && i < p.length - 2) {
        i++;
        
        p.forEach((reItem) => {
          reItem.classList.remove('active');
        })
        slides.forEach((s) => {
          s.classList.remove('active');
        })
        slides[i].classList.add('active');
        p[i].classList.add('active');
    
        w.style.transform = `translateX(${-i * 100/p.length + 10}%)`;
      } else if (i === p.length - 2) {
        i = p.length - 1;
        p.forEach((reItem) => {
          reItem.classList.remove('active');
        })
        slides.forEach((s) => {
          s.classList.remove('active');
        })
        slides[i].classList.add('active');
        p[i].classList.add('active');
    
        w.style.transform = `translateX(${-i * 100/p.length + 10}%)`;
      }

    } else {
      if (0 < i && i <= p.length - 1) {
        i--;
        
        p.forEach((reItem) => {
          reItem.classList.remove('active');
        })
        slides.forEach((s) => {
          s.classList.remove('active');
        })
        slides[i].classList.add('active');
        p[i].classList.add('active');
    
        w.style.transform = `translateX(${-i * 100/p.length + 10}%)`;
      } else if (i === 0) {
        i = 0;
        p.forEach((reItem) => {
          reItem.classList.remove('active');
        })
        slides.forEach((s) => {
          s.classList.remove('active');
        })
        slides[i].classList.add('active');
        p[i].classList.add('active');
    
        w.style.transform = `translateX(${-i * 100/p.length + 10}%)`;
      }

    }
  })

  // next 버튼 클릭
  nextBtn.addEventListener('click', function() {
    
    // 1 -> 2 -> 3 가는거랑 똑같음
    if (i >= 0 && i < p.length - 1) {
      i++;
      p.forEach((reItem) => {
        reItem.classList.remove('active');
      })
      slides.forEach((s) => {
        s.classList.remove('active');
      })
      slides[i].classList.add('active');
      p[i].classList.add('active');
  
      w.style.transform = `translateX(${-i * 100/p.length + 10}%)`;
    } else if (i === p.length) {
      i = p.length
      
      w.style.transform = `translateX(${-clickNum * 100/p.length + 10}%)`;
      
      p.forEach((item) => {
        item.classList.remove('active');
      })
      slides.forEach((s) => {
        s.classList.remove('active');
      })
      
      slides[i].classList.add('active');
      p[clickNum].classList.add('active');
    }
  })

  // prev 버튼 
  prevBtn.addEventListener('click', function() {

    // 3 -> 2 -> 1 이랑 똑같음
    if (i > 0 && i <= p.length - 1) {
      i--;

      p.forEach((reItem) => {
        reItem.classList.remove('active');
      })
      slides.forEach((s) => {
        s.classList.remove('active');
      })

      slides[i].classList.add('active');
      p[i].classList.add('active');
  
      w.style.transform = `translateX(${-i * 100/p.length + 10}%)`;
    } else if (i === 0) {
      i = 0;

      p.forEach((reItem) => {
        reItem.classList.remove('active');
      })
      slides.forEach((s) => {
        s.classList.remove('active');
      })

      slides[i].classList.add('active');
      p[i].classList.add('active');
  
      w.style.transform = `translateX(${-i * 100/p.length + 10}%)`;
    }
  })

}

imgSlide(wrapper, pagingBtns)


const point = document.querySelector('.pointer')

point.addEventListener('pointerdown', (e) => {
  console.log(e.clientX)
})

point.addEventListener('pointerup', (e) => {
  console.log(e.clientX)
})


