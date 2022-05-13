import React, { Component } from "react"
import Nav from "./Nav"
import Movies from "./Movies"
import { movieData } from "./movieData"
import '../styles/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies
    }
  }

  render = () => {
    return (
      <main>
        <Nav />
        <Movies movies={this.state.movies}/>
      </main>
    )
  }

}

export default App;
