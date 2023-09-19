import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherDaily.css";
import axios from "axios";

export default function WeatherDaily(props) {
  let apiKey = "864c93f2e4tcc8176afdd913f0a2b0o2";
  let longitude = props.coordinate.longitude;
  let latitude = props.coordinate.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

  function handleResponse(response) {
    console.log(response.data);
  }
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherDaily">
      <div className="row">
        <div className="col">
          <div className="Weather-day">Monday</div>
          <WeatherIcon code="mist-day" size={36} />
          <div className="Weather-temperature">
            <span className="Weather-temperature-max">19°</span>
            <span className="Weather-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
