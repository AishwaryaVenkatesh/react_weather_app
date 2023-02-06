import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="datedescription">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div class="col-8 img_temp">
          <div className="clearfix">
            <div className="float-left">
              <img
                src={props.data.icon}
                className="img"
                alt={props.data.description}
              />
            </div>
            <div className="float-left weather_temperature">
              {Math.round(props.data.temperature)}
              <sup className="weather_unit">°C</sup>
            </div>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>Feels Like: {Math.round(props.data.feelslike)} </li>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
