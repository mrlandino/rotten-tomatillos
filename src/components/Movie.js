import React from "react"
import "../styles/Movie.scss"

const Movie = ({title, key, poster, pageDetailsUpdate}) => {
  
  const showMovieDetails = (event) => {
    pageDetailsUpdate(event.target.id);

  }

  return (
    <div className="movie" key={key}>
      <img className="movie-poster" src={poster} onClick={event => showMovieDetails(event)}/>
      <h1 className="movie-title">{title}</h1>
    </div>
  )
}

export default Movie
