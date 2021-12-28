import images from "./images.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={images} className="App-logo img-fluid" alt="logo" />
        </header>
        <Dictionary />
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
