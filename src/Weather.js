import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  function handleSubmit(response) {
    console.log(response.data);
  }
  const apiKey = "864c93f2e4tcc8176afdd913f0a2b0o2";
  let city = "Durban";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleSubmit);
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
      <h1>Durban</h1>
      <ul>
        <li>Friday</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />

          <span className="temperature">26</span>
          <span className="units">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:75%</li>
            <li>Precipitation:0%</li>
            <li>Wind: 2km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
