const valueInputNode = document.querySelector('[data-value-input]')
const currencySelectorNode = document.querySelector('[data-currency-selector]')
const outputNode = document.querySelector('[data-output]')

function getInputs () {
  return {
    rub: Number(valueInputNode.value),
    currency: currencySelectorNode.value
  }
}

function render(result) {
  outputNode.textContent = result
}

valueInputNode.addEventListener('input', function(){
  let result = convert (getInputs())
  render(result)
})

currencySelectorNode.addEventListener('change', function(){
  let result = convert (getInputs())
  render(result)
})