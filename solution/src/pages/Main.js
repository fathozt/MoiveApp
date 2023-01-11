import { useEffect, useState, useRef, useContext } from "react";
import MovieCard from "../components/MoiveCard";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { toastWarnNotify } from "../helpers/ToastNotify";

const API_KEY = process.env.REACT_APP_TMDB_KEY;

export default function Main() {
  const movieName = useRef("");
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const searchMovie = () => {
    if (!currentUser) {
      toastWarnNotify("You need to login to make search!");
    } else if (movieName.current.value === "") {
      toastWarnNotify("Enter some text!");
    } else {
      setLoading(true);
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName.current.value}`
        )
        .then((res) => {
          if (res.data.results == []) {
            setMovieList(false);
          } else {
            setMovieList(res.data.results);
          }
        })
        .catch((err) => console.log(err.message))
        .finally(setTimeout(() => setLoading(false), 1000));
    }
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
      .then((res) => setMovieList(res.data.results))
      .catch((err) => console.log(err.message))
      .finally(setTimeout(() => setLoading(false), 1000));
  }, []);

  return (
    <div className="main-content">
      <div className="searchBar">
        <form onSubmit={(e) => e.preventDefault()} className="searchBarForm">
          <input type="text" placeholder="Search some movies" ref={movieName} />
          <button
            className="btn btn-outline-dark"
            onClick={() => searchMovie()}
          >
            SEARCH
          </button>
        </form>
      </div>

      <div className="cards">
        {loading ? (
          <div
            className="spinner-border"
            style={{ width: "5rem", height: "5rem" }}
            role="status"
          >
            <span className="sr-only"></span>
          </div>
        ) : movieList === false ? (
          <h1>There is no movie</h1>
        ) : (
          movieList.map((movie, index) => {
            return <MovieCard key={index.toString()} oneMovie={movie} />;
          })
        )}
      </div>
    </div>
  );
}
