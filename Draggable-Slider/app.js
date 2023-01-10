const carousel = document.querySelector('.carousel')
const firstImg = document.querySelector('.wrapper img')
const arrows = document.querySelectorAll('.wrapper i')

let firstImgWidth = firstImg.clientWidth
let isDragStart = false, prevPageX, prevScrollLeft

arrows.forEach((icon) => {
  icon.addEventListener('click', () => {
    carousel.scrollLeft += icon.dataset.position == 'left' ? -firstImgWidth : firstImgWidth
  })
})

const dragStart = (event) => {
  isDragStart = true
  prevPageX = event.pageX
  prevScrollLeft = carousel.scrollLeft
}
const dragEnd = () =>{
  isDragStart = false
  carousel.classList.remove('dragging')
}

function dragging(event) {
  if (!isDragStart) {
    return;
  }
  event.preventDefault()
  carousel.classList.add('dragging')
  let positionDiff = event.pageX - prevPageX
  carousel.scrollLeft = prevScrollLeft - positionDiff
}
carousel.addEventListener('mousedown', dragStart)
carousel.addEventListener('mousemove', dragging)
carousel.addEventListener('mouseup', dragEnd)
carousel.addEventListener('mouseleave', dragEnd)