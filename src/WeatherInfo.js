import React from "react";
import DateFormat from "./DateFormat";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.info.place}</h1>
      <ul>
        <li>
          <DateFormat date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img src={props.info.iconUrl} alt={props.info.description} />
          <span className="temperature">{props.info.temp}</span>
          <span className="units">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.info.humidity} %</li>
            <li>Wind:{props.info.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
