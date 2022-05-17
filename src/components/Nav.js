import React from "react"
import "../styles/Nav.scss"

const Nav = ({pageDetails}) => {
  return (
    <nav>
      <div>
        <h1>Rotten</h1>
        <h2>Tomatillos</h2>
      </div>
      
    </nav>
  )
}

export default Nav

// {pageDetails && <button onClick={pageDetailsUpdate}>HOME</button>}