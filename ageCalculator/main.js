//Variables for Datepicker
const datePicker = document.querySelector('[data-date-picker]')
const choseDate = document.querySelector('[data-show-date]')

//Variables for printing values
const ageYear = document.querySelector('.year')
const ageMonth = document.querySelector('.month')
const ageDays = document.querySelector('.days')
const ageHours = document.querySelector('.hours')
const ageMinutes = document.querySelector('.minutes')
const ageSeconds = document.querySelector('.seconds')


datePicker.addEventListener('change', function(){
  let options = {year: 'numeric', month: 'long', day: 'numeric'}
  let date = new Date(this.value)
  let DOB = date.toLocaleDateString('en-US', options)

  choseDate.innerText = DOB

  let millisecondsDOB = Date.parse(DOB)
  let millisecondsNow = Date.now()
  let ageInMilliseconds = millisecondsNow - millisecondsDOB
  
  let milSec = ageInMilliseconds
  let second = 1000
  let minute = second * 60
  let hour = minute * 60
  let day = hour * 24
  let month = day * 30
  let year = day * 365

  //Calculations

  let years = Math.floor(milSec / year)
  let months = years * 12
  let days = years * 365
  let hours = Math.round(milSec / hour)
  let minutes = Math.round(hours*60)
  let seconds = Math.round(milSec / second)

  //Printing

  ageYear.innerText = years
  ageMonth.innerText = months
  ageDays.innerText = days
  ageHours.innerText = hours
  ageMinutes.innerText = minutes
  ageSeconds.innerText = seconds

  document.querySelector('.age-calc').classList.add('expand')
})

