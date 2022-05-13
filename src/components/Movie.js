import React from "react"
import "../styles/Movie.scss"

const Movie = ({title, key, id, poster, pageDetailsUpdate, getMovie}) => {
  
  const showMovieDetails = () => {
    pageDetailsUpdate(id);
  }

  return (
    <div className="movie" key={key}>
      <img className="movie-poster" id={id} src={poster} onClick={() => showMovieDetails()}/>
      <h1 className="movie-title">{title}</h1>
    </div>
  )
}

export default Movie
