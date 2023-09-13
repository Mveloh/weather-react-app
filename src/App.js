import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity ="Durban"/>

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/nomvelozulup"
            target="_blank"
            rel="noreferrer"
          >
            Nomvelo Zulu{" "}
          </a>{" "}
          and is {""}
          <a
            href="https://www.github.com/Mveloh/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
