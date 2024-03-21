import "../components/NavBar.js";
import NavBar from "../components/NavBar.js";
import Button from "react-bootstrap/Button";
import "./transit.css";

export default function Transit() {
  return (
    <>
      <div className="App">
        <NavBar />

        <div className="des">
          <span>Choose your journey with us</span>
        </div>
        <div className="btn-div">
          <Button variant="primary" size="lg">
            Customer
          </Button>
          <Button variant="primary" size="lg">
            Restaurant Owner
          </Button>
        </div>
      </div>
    </>
  );
}
