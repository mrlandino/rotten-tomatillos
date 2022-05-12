import React from "react"
import "../styles/Movie.scss"

const Movie = ({title, id, key, poster, backdrop}) => {
  return (
    <div className="movie">
      <img className="movie-poster" src={poster}/>
      <h1 className="movie-title">{title}</h1>
    </div>
  )
}

export default Movie
