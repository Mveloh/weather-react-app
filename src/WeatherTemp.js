import React from "react";

export default function WeatherTemp(props) {
  return (
    <div className="WeatherTemp">
      <span className="temperature">{props.celcius}</span>
      <span className="units">°C </span>
    </div>
  );
}
