// variables

const menuButton = document.querySelector('.menu-icon')
const mobileNav = document.querySelector('.navbar')
const closeButton = document.querySelector('.close-icon')

menuButton.addEventListener('click', ()=>{
  mobileNav.classList.add('active')
})

closeButton.addEventListener('click', ()=>{
  mobileNav.classList.remove('active')
})