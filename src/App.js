import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="Weatherapp">
      <h1> Weather app </h1>
      <Weather />
      <p>
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
      <button class="btn btn-primary" type="submit">
        Button
      </button>
    </div>
  );
}
