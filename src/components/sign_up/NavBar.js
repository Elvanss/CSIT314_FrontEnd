import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./transit.css";

export default function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Link to="/">
              <Navbar.Brand>App Name</Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/login" className="change">
                  <Button className="login-button" variant="light" size="lg">
                    <span className="login-context">Login</span>
                  </Button>{" "}
                </Link>
                <Link to="/signup" className="change">
                  <Button variant="dark" size="lg">
                    Sign Up
                  </Button>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <br />
    </>
  );
}
