const inputANode = document.querySelector('[data-input-a]')
const inputBNode = document.querySelector('[data-input-b]')
const selectOperationNode = document.querySelector('[data-select-operation]')
const btnResultNode = document.querySelector('[data-btn-result]')
const outputNode = document.querySelector('[data-output]')
btnResultNode.addEventListener('click', function(){
  const a = Number(inputANode.value)
  const b = Number(inputBNode.value)
  const operation = selectOperationNode.value

  const result = calculate({a, b, operation})
  
  outputNode.textContent = result
})