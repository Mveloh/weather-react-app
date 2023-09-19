import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.info.temperature.maximum);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.info.temperature.minimum);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.info.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="Weather-day">{day()}</div>
      <WeatherIcon code={props.info.condition.icon} size={36} />
      <div className="Weather-temperature">
        <span className="Weather-temperature-max">{maxTemp()}°</span>
        <span className="Weather-temperature-min">{minTemp()}°</span>
      </div>
    </div>
  );
}
