import React from "react"
import "../styles/Nav.scss"
import { Route, NavLink } from 'react-router-dom';

const Nav = ({id}) => {
  return (
    <nav>
      <div>
        <h1>Rotten</h1>
        <h2>Tomatillos</h2>
      </div>
      <Route path="/:id" render= {() => <NavLink to="/"><button className='home'>HOME</button></NavLink>} />
    </nav>
  )
}

export default Nav
