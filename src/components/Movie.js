import React from "react"
import "../styles/Movie.scss"

const Movie = ({title, id, poster, pageDetailsUpdate}) => {
  
  const showMovieDetails = () => {
    pageDetailsUpdate(id);
  }

  return (
    <div className="movie" key={id}>
      <img className="movie-poster" id={id} src={poster} onClick={() => showMovieDetails()}/>
      <h1 className="movie-title">{title}</h1>
    </div>
  )
}

export default Movie
