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
      <div className="form-image d-none d-md-block">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="formInputsDiv">
        <form className="formInputs" onSubmit={handleSubmit}>
          <div>
            <h3 htmlFor="firstName">First Name</h3>
            <input
              onChange={handleChange}
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Enter your first name.."
              required
            />
          </div>
          <div className="mb-3">
            <h3 htmlFor="lastName">Last Name</h3>
            <input
              onChange={handleChange}
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Enter your last name.."
              required
            />
          </div>
          <div>
            <h3 htmlFor="email">Email</h3>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email.."
              required
            />
          </div>
          <div>
            <h3 htmlFor="password">Password</h3>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password.."
              required
            />
          </div>
          <button className="btn btn-primary form-control" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
