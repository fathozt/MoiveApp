import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../auth/firbase";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <h1>React Moive App</h1>
        </Link>
      </div>
      {currentUser ? (
        <div className="buttonsDiv ">
          <h3>{currentUser?.displayName}</h3>
          <button
            className="btn btn btn-primary"
            onClick={() => {
              logOutUser(currentUser);
            }}
          >
            LOGOUT
          </button>
        </div>
      ) : (
        <div className="buttonsDiv">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
}
