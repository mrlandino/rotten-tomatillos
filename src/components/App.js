import React, { Component } from "react"
import Nav from "./Nav"
import Movies from "./Movies"
import MovieDetails from "./MovieDetails"
import { movieData } from "./movieData"
import '../styles/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies, 
      pageDetails: false,
      currentMovie: ''
    }
  }

  pageDetailsUpdate = (id) => {
    const status;
    if (this.state.pageDetails === false) {
      status = true;
    } else if (this.state.pageDetails === true) {
      status = false;
    }
    this.setState({currentMovie: id})
    this.setState({pageDetails: status})
  }
  render = () => {
    return (
      <main>
        <Nav />
        {!this.state.pageDetails && <Movies movies={this.state.movies} pageDetailsUpdate={this.pageDetailsUpdate} />}
        {this.state.pageDetails && <MovieDetails pageDetailsUpdate={this.pageDetailsUpdate} currentMovie={this.state.currentMovie}/>}
      </main>
    )
  }

}

export default App;
