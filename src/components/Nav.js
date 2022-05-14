import React from "react"
import "../styles/Nav.scss"

const Nav = ({pageDetails, pageDetailsUpdate}) => {
  return (
    <nav>
      <div>
        <h1>Rotten</h1>
        <h2>Tomatillos</h2>
      </div>
      {pageDetails && <button onClick={pageDetailsUpdate}>HOME</button>}
    </nav>
  )
}

export default Nav
