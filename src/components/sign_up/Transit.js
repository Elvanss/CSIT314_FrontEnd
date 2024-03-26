import "./NavBar.js";
import NavBar from "./NavBar.js";
import Button from "react-bootstrap/Button";
import "./transit.css";

export default function Transit() {
  return (
    <>
      <div className="App">
        <NavBar />

        <div className="des">
          <span className="font-des">Choose your journey with us</span>
        </div>
        <div className="btn-div">
          <div className="customer">
            <Button className="cust-btn" variant="success" size="lg">
              Customer
            </Button>
          </div>
          <div className="restaurant">
            <Button className="res-btn" variant="success" size="lg">
              Restaurant Owner
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
