import React, { Component } from "react"
import Nav from "./Nav"
import Footer from "./Footer"
import '../styles/App.scss';

class App extends Component {
  constructor() {
    super()
  }

  render = () => {
    return (
      <main>
        <Nav />
        <Footer />
      </main>
    )
  }

}

export default App;
