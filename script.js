async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = '696d97fd03ee74585cc6ffe1986af46e';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === "404") {
        document.getElementById("weatherResult").innerHTML = "🌧️ City not found!";
      } else {
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  
        const weather = `
          <img src="${iconUrl}" alt="weather icon" />
          <h2>${data.name}</h2>
          <p><strong>${data.weather[0].main}</strong> (${data.weather[0].description})</p>
          <p>🌡️ ${data.main.temp} °C</p>
          <p>💨 Wind: ${data.wind.speed} m/s</p>
        `;
        document.getElementById("weatherResult").innerHTML = weather;
      }
    } catch (error) {
      document.getElementById("weatherResult").innerHTML = "Error fetching weather data.";
    }
  }
  