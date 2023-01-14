import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1> Weather app </h1>
      <Weather defaultCity="Chennai" />
      <p className="footer">
        This project was coded by{" "}
        <a
          href="https://aishwaryavenkatesh.github.io/"
          target="_blank"
          rel="noreferrer"
        >
          Aishwarya
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/AishwaryaVenkatesh/react_weather_app"
          target="_blank"
          rel="noreferrer"
        >
          Open Sourced
        </a>{" "}
      </p>
    </div>
  );
}
