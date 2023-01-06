const inputNode = document.querySelector('.answer')
const buttonNode = document.querySelector('.submit-btn')
const outputNode = document.querySelector('.output-field')

const ANSWER = {
  year: 1700,
}

const RESPOND = {
  correct: 'Correct answer!',
  incorrect: 'Wrong answer!',
}

buttonNode.addEventListener('click', function() {
  const answer = inputNode.value
  let output = RESPOND.correct
  let isTrue = true
  if (answer != ANSWER.year) {
    output = RESPOND.incorrect
    isTrue = false
  }

  if (isTrue) {
    outputNode.classList.remove('false')
    outputNode.classList.add('true')
  } else {
    outputNode.classList.remove('true')
    outputNode.classList.add('false')
  }

  outputNode.innerText = output

   setTimeout(()=>{
    outputNode.innerText = null
    inputNode.value = null
    outputNode.classList.remove('true')
    outputNode.classList.remove('false')
   }, 2000)
})