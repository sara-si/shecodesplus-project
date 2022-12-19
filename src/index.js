function displayForecast() {
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;

  //let days = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"];
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
