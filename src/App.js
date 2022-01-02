import icon from "./icon.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={icon} className="App-logo img-fluid" alt="logo" />
        </header>
        <Dictionary defaultKeyword="peace" />
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a href="https://github.com/julietarod/project-dicc">JulietaRod</a>
          </small>
        </footer>
      </div>
    </div>
  );
}
