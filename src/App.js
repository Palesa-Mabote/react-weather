import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <p>
        <a
          href="https://github.com/Palesa-Mabote/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by Palesa Mabote
      </p>
    </div>
  );
}

export default App;
