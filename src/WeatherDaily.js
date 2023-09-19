import React, { useState } from "react";
import "./WeatherDaily.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherDaily(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState();

  function handleResponse(response) {
    console.log(response.data.daily);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherDaily">
        <div className="row">
          <div className="col">
            <WeatherForecastDay info={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "864c93f2e4tcc8176afdd913f0a2b0o2";
    let longitude = props.coordinate.longitude;
    let latitude = props.coordinate.latitude;

    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
