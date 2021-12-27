import images from "./images.jpg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={images} className="App-logo img-fluid" alt="logo" />
        <a href="#" className="btn btn-primary">
          {" "}
          look for it
        </a>
      </header>
    </div>
  );
}
