import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toastWarnNotify } from "../helpers/ToastNotify";

export default function MovieCard({ oneMovie }) {
  const { original_title, poster_path, overview } = oneMovie;
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const { id } = oneMovie;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  return (
    <div className="card-container">
      <div
        className="movieCard"
        onClick={() =>
          currentUser
            ? navigate("/detail/" + id)
            : toastWarnNotify("You need to login to see details!")
        }
      >
        <img
          loading="layz"
          src={poster_path ? baseImageUrl + poster_path : defaultImage}
          alt=""
        />
        <div className="moiveOverview">
          <h5>
            <p>{original_title}</p>
          </h5>
          <p>{overview}</p>
        </div>
      </div>
      {/* <div className="moiveTitle">
        <p>{original_title}</p>
      </div> */}
    </div>
  );
}
