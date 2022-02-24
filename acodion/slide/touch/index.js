
const touchEl = document.querySelector('.touch')

let mousePress = false;
let positionX;
let moveX;

document.addEventListener('mousedown', function(e) {
  mousePress = true;
  console.log('나는 offsetX',e.offsetX)
  console.log('나는 touchEl', touchEl.offsetLeft)
  positionX = e.offsetX - touchEl.offsetLeft
  touchEl.style.cursor = 'grabbing'
}, false)

document.addEventListener('mouseenter', () => {
  touchEl.style.cursor = 'grab'
})

document.addEventListener('mouseup', () => {
  touchEl.style.cursor = 'grab'
})

window.addEventListener('mouseup', () => {
  mousePress = false
})