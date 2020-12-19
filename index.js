function tellUsTheWeather(response) {
  document.querySelector("#city");
  city.innerHTML = response.data.name;
  document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);
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
