import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";
import WeatherDaily from "./WeatherDaily";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleSubmit(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coord: response.data.coordinates,
      temp: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      place: response.data.city,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
    });
  }
  function handleResponse(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "864c93f2e4tcc8176afdd913f0a2b0o2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleResponse}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherInfo info={weatherData} />
        <WeatherDaily coordinate={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
