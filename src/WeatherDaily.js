import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherDaily.css";

export default function WeatherDaily() {
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
