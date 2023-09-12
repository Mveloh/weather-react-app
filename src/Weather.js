import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import DateFormat from "./DateFormat";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleSubmit(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temp: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      city: response.data.city,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: response.data.time * 1000,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <DateFormat date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />

            <span className="temperature">{weatherData.temp}</span>
            <span className="units">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity:{weatherData.humidity} %</li>
              <li>Wind:{weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "864c93f2e4tcc8176afdd913f0a2b0o2";
    let city = "Durban";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);
  }
  return "Loading...";
}
