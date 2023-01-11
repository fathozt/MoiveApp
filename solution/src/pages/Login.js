import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logInUser, signUpProvider } from "../auth/firbase";
export default function Login() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    console.log(info);
  };

  const { email, password } = info;

  const handleSubmit = (e) => {
    e.preventDefault();
    logInUser(email, password, navigate);
  };

  return (
    <div className="forms">
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                className="form-control mt-1"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-4">
              <button type="submit" className="btn btn-dark">
                Sign In
              </button>
            </div>
            <div className="or">
              <hr style={{ width: "45%" }} />
              <p>or</p>
              <hr style={{ width: "45%" }} />
            </div>
            <div className="d-grid gap-2 mt-2">
              <button
                type="submit"
                onClick={() => signUpProvider(navigate)}
                className="btn btn-secondary"
              >
                <i className="googleIcon bi bi-google"></i>
                Login with Google
              </button>
            </div>
            <div className="d-grid gap-2 mt-2">
              <button
                className="btn btn-outline-dark"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </div>

            <p className="forgot-password text-right mt-3">
              Forgot <a href="#_">password?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
