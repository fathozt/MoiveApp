import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function MoiveDetail() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [videoKey, setVideoKey] = useState([]);
  const {
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
    vote_count,
  } = movieDetails;
  const { id } = useParams();
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const movieDetailURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const baseImageURL = "https://image.tmdb.org/t/p/w1280";
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
  useEffect(() => {
    axios
      .get(movieDetailURL)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err.message));

    axios
      .get(videoUrl)
      .then((res) => setVideoKey(res.data.results[0].key))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="container">
      <h1>{title}</h1>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={poster_path ? baseImageURL + poster_path : defaultImage}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8 d-flex flex-column ">
            <div className="card-body">
              <h5 className="card-title">Overview</h5>
              <p className="card-text">{overview}</p>
              <div className="card w-75 m-auto my-3">
                <div className="card-body">
                  <div className="ratio ratio-16x9">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
                      title="YouTube video"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <ul className="list-group ">
              <li className="list-group-item">
                {"Release Date : " + release_date}
              </li>
              <li className="list-group-item">{"Rate : " + vote_average}</li>
              <li className="list-group-item">
                {"Total Vote : " + vote_count}
              </li>
              <li className="list-group-item">
                <Link to={-1} className="card-link">
                  Go Back
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
