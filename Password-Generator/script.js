const lengthSlider = document.querySelector('.pass-length input')
const currentLengthOutput = document.querySelector('.details span')
const buttonPasswordGenerator = document.querySelector('.glow-on-hover')
const options = document.querySelectorAll('.option input')
const indicator = document.querySelector('.pass-indicator')
const output = document.querySelector('.input-box input')
const copyButton = document.querySelector('.input-box span')

let [lowercase, uppercase, numbers] = ['','',''];
for (let i = 0; i < 26; i++) {
  uppercase += String.fromCharCode(65 + i);
  lowercase += String.fromCharCode(97 + i);
  if (i < 10) {
    numbers += String.fromCharCode(48 + i)
  }
}

const characters = {
  lowercase,
  uppercase,
  numbers,
  symbols: '^!$%&|[](){}:;.,*+-_#@<>~',
  spaces: '      '
}


function updateSlider(event) {
  currentLengthOutput.innerText = event.target.value
  generatePassword()
}



function generatePassword() {
  let staticPassword = ''
  let randomPassword = ''
  let passwordLength = lengthSlider.value
  let isExclude = false
  options.forEach(option => {
    if (option.checked){
      staticPassword += characters[option.id]
      if (option.id === 'duplicates') {
        isExclude = true
      }
    }
  })

  for (let i = 0; i < passwordLength; i++) {
    let randomChar = staticPassword[Math.trunc(Math.random() * staticPassword.length)]
    if (isExclude) {
      !randomPassword.includes(randomChar) || randomChar == ' ' ? randomPassword += randomChar : i--
    } else {
      randomPassword += randomChar
    }
  }
  
  output.value = randomPassword
  updateIndicator()

  function updateIndicator() {
    indicator.id = lengthSlider.value < 8 ? 'weak' : lengthSlider.value < 14 ? 'medium' : 'strong'
  }
}

function copyPassword() {
  navigator.clipboard.writeText(output.value)
  copyButton.innerText = 'check'
  setTimeout(()=>copyButton.innerText = 'copy_all', 1500)
}

lengthSlider.addEventListener('input', updateSlider)
buttonPasswordGenerator.addEventListener('click', generatePassword)
copyButton.addEventListener('click', copyPassword)

currentLengthOutput.innerText = lengthSlider.value