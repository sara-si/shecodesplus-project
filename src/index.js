function formatDate(time) {
  let date = new Date(time);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.current.temp_c);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.location.name;
  let countryElement = document.querySelector("#country");
  countryElement.innerHTML = response.data.location.country;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.current.condition.text;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.current.humidity;
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.current.wind_kph);
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(
    response.data.location.localtime_epoch * 1000
  );
}

function displayIcon(response) {
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute("src", `${response.data.condition.icon_url}`);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function search(city) {
  let apiKey = "57e196ced6754eafbd1165545222212";
  let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  axios.get(apiUrl).then(displayTemperature);
  let apiKey2 = "fta134003b032o583a14a7f723b18aa3";
  let apiUrl2 = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey2}`;
  axios.get(apiUrl2).then(displayIcon);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("Tabriz");

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;

  let days = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
       <div class="col">
              <div class="forecast-day">${day}</div>
              <div class="forecast-icon">
                <img
                  src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-night.png"
                  width="100"
                />
              </div>
              <div class="forecast-temperature">
                <span class="forecast-temperature-max">18°</span>
                <span class="forecats-temperature-min">12°</span>
              </div>
            </div>`;
  });

  forecastHTML = forecastHTML + `</div>`;

  forecastElement.innerHTML = forecastHTML;
}
displayForecast();
