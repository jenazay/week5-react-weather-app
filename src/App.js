import './App.css';
import Weather from "./weather.js"


function App() {
  return (
    <div>
      <div className="App">
        <Weather defaultCity="New York" />
      </div>
      <div className="footer text-center">
        <footer>
          This project was coded by{" "}
          <span href="/" target="_blank" rel="noreferrer">
            Zeinab Zamani
          </span>{" "}
          and is{" "}
          <a
            href="https://github.com/jenazay/week5-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
          on GitHub
        </footer>
      </div>
    </div>
  );
}

export default App;
