import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <>
      <div className="login">
        <Link to="/" className="change">
          <div className="label font">App name</div>
        </Link>

        <br />
        <div className="login-box">
          <Form className="login-form">
            <div className="sign-in">Sign in</div>
            <Form.Group className="email" controlId="formBasicEmail">
              <Form.Label className="font-email">Email address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="password" controlId="formBasicPassword">
              <Form.Label className="font-email">Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Form.Label>
              By continuing, you agree to the Terms of use and Privacy Policy.{" "}
            </Form.Label>
            <Button variant="primary" type="submit" className="login-btn">
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
            <span>
              Don’t have an acount?{" "}
              <Link to="/signup" className="change">
                Sign up here
              </Link>
            </span>
          </div>
        </div>
        <div className="third-part">
          <span className="or">OR</span>
        </div>
        <div className="third-part-2">
          <Button className="btn-gg"><span className="haha">Continue with Google</span></Button>
        </div>
      </div>
    </>
  );
}
