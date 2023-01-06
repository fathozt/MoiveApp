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
      <div className="form-image d-none d-md-block">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="formInputsDiv">
        <div className="formInputs">
          <form onSubmit={handleSubmit}>
            <div className="email ">
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
            <div className="password ">
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
            <div className="forgotPwd" onClick={null}>
              <a href="#">Forgot Password?</a>
            </div>
            <button className="form-control" type="submit">
              Login
            </button>
            <button
              className="form-control"
              onClick={() => signUpProvider(navigate)}
            >
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
