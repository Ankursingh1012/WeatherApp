async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const resultDiv = document.getElementById("weatherResult");

    if (!city) {
        resultDiv.innerText = "Please enter a city name.";
        return;
    }

    try {
        const response = await fetch(
            https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric
        );

        if (!response.ok) {
            resultDiv.innerText = "City not found.";
            return;
        }

        const data = await response.json();
        resultDiv.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        resultDiv.innerText = "Error fetching weather data.";
        console.error(error);
    }
}
