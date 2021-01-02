
function tellUsTheWeather(response) {
  console.log(response.data)
  document.querySelector("#city");
  city.innerHTML = response.data.name;
  document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let wind = document.querySelector("#wind")
  wind.innerHTML = Math.round(response.data.wind.speed);
  let now = new Date();
  let hours = now.getHours()
  let date = now.getDate()
  let minutes = now.getMinutes()
  let days = ["Sun", "Mon", "Tues", "Wed" ,"Thurs", "Fri", "Sat"]
  let day = days[now.getDay()]
  let todayDate = document.querySelector("#date") 
  todayDate.innerHTML = `${day} ${date}, ${hours}:${minutes}`
  let icon = document.querySelector("#icon")
  icon.setAttribute("src",`http://openweathermap.org/img/wn/${response.weather.data.icon}@2x.png`)

  icon.setAttribute("alt", response.data.weather.description)
  

}
function search(event) {
  event.preventDefault();
  let apiKey = "fbf71df4a4f913e5058a300f39854588";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(tellUsTheWeather);
}
let searchForm = document.querySelector("#search-city");
searchForm.addEventListener("submit", search);
