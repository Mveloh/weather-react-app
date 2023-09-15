import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "celcius") {
    return (
      <div className="WeatherTemp">
        <span className="temperature">{props.celcius}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let FahrenheitTemp = (props.celcius * 9) / 5 + 32;
    return (
      <div className="WeatherTemp">
        <span className="temperature">{Math.round(FahrenheitTemp)}</span>
        <span className="units">
          <a href="/" onClick={showCelcius}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
