import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="App">
        <NavBar></NavBar>

        <br></br>
        <div className="description">
          <span>Savor the Flavor, Delivered to Your Door.</span>
        </div>
      </div>
    </>
  );
}

export default App;
