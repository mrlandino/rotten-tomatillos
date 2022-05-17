import React from "react"
import Movie from "./Movie"
import Footer from "./Footer"
import "../styles/Movies.scss"

const Movies = ({movies}) => {
  const movieCards = movies.map(movie => {
    return (
      <Movie
        title={movie.title}
        id={movie.id}
        key={movie.id}
        poster={movie.poster_path}
        backdrop={movie.backdrop_path}
      />
    )
  })
  return (
    <div className="movie-container">
      {movieCards}
      <Footer />
    </div>
  )
}

export default Movies
