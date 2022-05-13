import React from "react"
import "../styles/Nav.scss"

const Nav = ({pageDetails}) => {
  return (
    <nav>
      <h1>Rotten</h1>
      <h2>Tomatillos</h2>
      {pageDetails && <button>HOME</button>}
    </nav>
  )
}

export default Nav
