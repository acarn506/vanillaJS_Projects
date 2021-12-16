const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let futureDate = new Date(2021, 9, 24, 10, 30, 0)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
const month = months[futureDate.getMonth()]
const weekday = weekdays[futureDate.getDay()]
const day = futureDate.getDate()

giveaway.innerText = `Giveaway ends on ${weekday}, ${day} ${month} ${year} ${hours}:${minutes}am`

const futureTime = futureDate.getTime()

function getRemainingTime() {
  const today = new Date().getTime()
  const t = futureTime - today
  console.log(t)

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000 
  const oneHour = 60 * 60 * 1000
  const oneMin = 60 * 1000
  const oneSec = 1000

  

}

getRemainingTime()

  