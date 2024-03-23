import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/sign_up/NavBar";

function App() {
  return (
    <>
      <div className="App" >
        <NavBar></NavBar>
        <br></br>
        <div className="description">
          <span className="context">Savor the Flavor, Delivered to Your Door.</span>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
