import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      feelslike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
      description: response.data.condition.description,
      time: "Wednesday 07:00",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-6">
              <input
                type="submit"
                value="Search"
                className="submitbutton"
              ></input>
              <input
                type="submit"
                value="Current Location"
                className="currentlocation"
              ></input>
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul className="datedescription">
          <li>{weatherData.time}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div class="col-md-8">
            <img
              src={weatherData.icon}
              className="img"
              alt={weatherData.description}
            />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span>
              <sup className="unit">
                <a href="#" className="celsius active">
                  {" "}
                  °C{" "}
                </a>
                |
                <a href="#" className="fahrenheit">
                  {" "}
                  °F{" "}
                </a>
              </sup>
            </span>
          </div>
          <div className="col-4">
            <ul>
              <li>Feels Like: {Math.round(weatherData.feelslike)} </li>
              <li>Humidity: {Math.round(weatherData.humidity)}%</li>
              <li>Wind: {Math.round(weatherData.wind)}km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "aa0eaatd7f357dof3433b25a3dc8a2f5";

    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
