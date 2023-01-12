//c Variables
const cartIcon = document.querySelector('#cart-icon')
const cart = document.querySelector('.cart')
const cartContent = document.querySelector('.cart-content')
const products = document.querySelectorAll('.product-box')
const closeCart = document.querySelector('.close-cart')
const totalPrice = document.querySelector('.total-price')


//c Side menu open/close
cartIcon.addEventListener('click', () => cart.classList.add('active'))
closeCart.addEventListener('click', () => cart.classList.remove('active'))

//@ Side menu cart

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

//@ Functions

//c ready function after page loading completed
function ready () {
  //remove items from cart
  const removeCartButtons = document.querySelectorAll('.cart-remove')

  for (let i = 0; i < removeCartButtons.length; i++) {
    let button = removeCartButtons[i]
    button.addEventListener('click', removeCartItem)
  }

  //quantity changed
  const quantityInputs = document.querySelectorAll('.cart-quantity')
  quantityInputs.forEach( (input) => {
    input.addEventListener('change', quantityChanged)
  })

  //add to cart
  const addButtons = document.querySelectorAll('.add-cart')
  addButtons.forEach( (button) => {
    button.addEventListener('click', addItemToCart)
  })
}


//c Add item to cart
function addItemToCart(event) {
  const button = event.target
  const shopProduct =  button.parentElement
  const title = shopProduct.querySelector('.product-title').innerText
  const price = shopProduct.querySelector('.price').innerText
  const img = shopProduct.querySelector('.product-img').getAttribute('src')
  addItem(title, price, img)
  updateTotal()
}

function addItem(title, price, img) {
  let cartBox = document.createElement('div')
  cartBox.classList.add('cart-box')
  let cartItemsNames = cartContent.querySelectorAll('.cart-product-title')
  let isAdded = false
  cartItemsNames.forEach((el) => {
    if (title === el.innerText){
      alert('Already added')
      isAdded = true
      return
    }
  })

  if(!isAdded) {
      let cartBoxContent = `
      <img src="${img}" alt="t-shirt">
      <div class="details-box" '>
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity" max="99" min="0">
      </div>
      <i class='bx bx-trash-alt cart-remove' onclick='removeCartItem(event)'></i>
    `
    cartBox.innerHTML = cartBoxContent
    cartContent.append(cartBox)
    cartBox.addEventListener('change', quantityChanged)
  }
}

//c Function: remove items from cart
function removeCartItem (event) {
  let button = event.target
  button.parentElement.remove()
  updateTotal ()
}


//c Update Total Price
function updateTotal () {
  let totalSum = 0
  cart.querySelectorAll('.cart-box').forEach( (element) => {
    let price = element.querySelector('.cart-price').innerText.slice(1)
    let amount = element.querySelector('.details-box input').value
    totalSum += +price * amount
  })

  totalSum = totalSum.toFixed(2)

  totalPrice.innerText = '$' + totalSum
}

//c Quantity changed
function quantityChanged(event) {
  const input = event.target

  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateTotal()
}

document.querySelector('.buy-button').addEventListener('click', buyCart)
//c Buy Button
function buyCart() {
  alert('Order is placed')
  while(cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstElementChild)
  }
  updateTotal()
}