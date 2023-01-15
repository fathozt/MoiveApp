import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../auth/firbase";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function changeLocation(placeToGo) {
    navigate(placeToGo, { replace: true });
    window.location.reload();
  }

  return (
    <div className="navbar">
      <div className="navbar-h1">
        <Link to="/" onClick={() => changeLocation("/")}>
          <h1>React Moive App</h1>
        </Link>
      </div>

      {currentUser ? (
        <div className="user-info">
          <h3>{currentUser?.displayName}</h3>
          <button
            className="btn btn btn-outline-dark fw-bold"
            onClick={() => {
              logOutUser(currentUser);
            }}
          >
            LOGOUT
            <i className="bi bi-box-arrow-right m-2"></i>
          </button>
        </div>
      ) : (
        <button
          className="btn btn-outline-light fw-bold"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      )}
    </div>
  );
}
