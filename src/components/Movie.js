import React from "react"
import "../styles/Movie.scss"
import { NavLink } from 'react-router-dom'

const Movie = ({title, id, poster}) => {

  return (
    <NavLink to={`/${id}`} style={{ textDecoration: 'none' }}>
      <div className="movie" key={id}>
        <img className="movie-poster" id={id} src={poster} />
        <h1 className="movie-title">{title}</h1>
      </div>
    </NavLink>
  )
}

export default Movie
