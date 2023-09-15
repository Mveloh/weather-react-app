import React from "react";
import DateFormat from "./DateFormat";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

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
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.info.icon} />
            </div>
            <div className="float-left">
              <WeatherTemp celcius={props.info.temp} />
            </div>
          </div>
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
