import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../auth/firbase";

export default function Register() {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const { firstName, lastName, email, password } = info;

  let displayName = `${firstName} ${lastName}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password, navigate, displayName);
  };

  return (
    <div className="forms">
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register</h3>
            <div className="form-group mt-3">
              <label>Firs Name</label>
              <input
                onChange={handleChange}
                type="text"
                name="firstName"
                className="form-control mt-1"
                placeholder="Enter first name"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Last Name</label>
              <input
                onChange={handleChange}
                type="text"
                name="lastName"
                className="form-control mt-1"
                placeholder="Enter last name"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                className="form-control mt-1"
                placeholder="Enter email "
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
              <button
                className="btn btn-outline-dark"
                onClick={() => navigate("/register")}
              >
                Register with E-mail
              </button>
            </div>
            <div className="or">
              <hr style={{ width: "45%" }} />
              <p>or</p>
              <hr style={{ width: "45%" }} />
            </div>
            <div className="d-grid gap-2 mt-2">
              <button type="submit" className="btn btn-secondary">
                <i className="googleIcon bi bi-google"></i>
                Register with Google
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
