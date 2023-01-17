import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsuis(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return props.celsius * 1.8 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="weatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span>
          <sup className="unit">
            {" "}
            °C |
            <a href="/" onClick={showFahrenheit}>
              {" "}
              °F{" "}
            </a>
          </sup>
        </span>
      </div>
    );
  } else {
    return (
      <div className="weatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span>
          <sup className="unit">
            {" "}
            <a href="/" onClick={showCelsuis}>
              {" "}
              °C{" "}
            </a>
            | °F{" "}
          </sup>
        </span>
      </div>
    );
  }
}
