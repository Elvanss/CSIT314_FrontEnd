import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";

export default function Login() {
  return (
    <>
      <div className="login">
        <div className="label">App Name</div>
        <br />
        <div className="login-form">
          <Form>
            <div className="sign-up">Sign Up</div>
            <br />
            <Form.Group className="email" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <br />
            <Form.Group className="password" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Form.Label>
              By continuing, you agree to the Terms of use and Privacy Policy.{" "}
            </Form.Label>
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="second-part">
          <div className="reset-pass">
            <span>Forgot Your Password</span>
          </div>
          <br></br>
          <div className="sign-up">
            <span>Don’t have an acount? Sign up </span>
          </div>
        </div>
      </div>
    </>
  );
}
