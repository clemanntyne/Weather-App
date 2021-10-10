let currentTime = new Date();
console.log(currentTime);
console.log(currentTime.getDay());
console.log(currentTime.getMonth());
console.log(currentTime.getDate());
console.log(currentTime.getFullYear());
console.log(currentTime.getHours());

function currentDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();

  let formattedDate = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;

  return formattedDate;
}
console.log(currentDate(currentTime));

console.log(document.querySelector("#date-long"));

let dateLong = document.querySelector("#date-long");
dateLong.innerHTML = `${currentDate(currentTime)}`;

function currentClock(time) {
  let hours = [
    "12",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
  ];
  let currentHour = hours[time.getHours()];
  let currentMinutes = ("0" + time.getMinutes()).slice(-2);

  let formatttedTime = `${currentHour}:${currentMinutes}`;

  return formatttedTime;
}

console.log(currentTime.getMinutes());

console.log(currentClock(currentTime));

let time = document.querySelector("#clock");
time.innerHTML = `${currentClock(currentTime)}`;

console.log(time);

function getWeather(event) {
  event.preventDefault();
  let input = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${input.value}`;
}

let searchInput = document.querySelector("#search");
searchInput.addEventListener("click", getWeather);

//function displayFar() {
//let fahr = document.querySelector(".the-temp");
//fahr.innerHTML = "showCtemp";
//}

//let fahrenheit = document.querySelector("#farh-link");
//fahrenheit.addEventListener("click", displayFar);

//function displayCel() {
//let cel = document.querySelector(".the-temp");
//cel.innerHTML = "34";
//}

//let celsius = document.querySelector("#cels-link");
//celsius.addEventListener("click", displayCel);

function showTemp(response) {
  document.querySelector("#search-text-input").innerHTML = response.data.name;
  document.querySelector(".the-temp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  let apiKey = "88724523008dc9e1be18f6eb6a959b67";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&units=imperial`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
}

let cityInput = document.querySelector("#search");
cityInput.addEventListener("click", search);

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "88724523008dc9e1be18f6eb6a959b67";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
}

function getCurrentPosition(event) {
  event.preventDefault;
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentLocation = document.querySelector(".current-location");
currentLocation.addEventListener("click", getCurrentPosition);
