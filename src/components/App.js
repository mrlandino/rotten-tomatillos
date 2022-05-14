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
      movies: [], 
      pageDetails: false,
      currentMovie: '',
      error: '',
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => this.setState({movies: data.movies}))
    .catch(err => this.setState({error: "Something we wrong, Please try again later."}))
  }

  pageDetailsUpdate = (id) => {
    let status = false;
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
        <Nav pageDetails= {this.state.pageDetails} pageDetailsUpdate= {this.pageDetailsUpdate}/>
        {this.state.error && <h3 className='error'>{this.state.error}</h3>}
        {!this.state.pageDetails && <Movies movies={this.state.movies} pageDetailsUpdate={this.pageDetailsUpdate} getMovie={this.getMovie}/>}
        {/* {this.state.error2 && <h3 className='error2'>{this.state.error2}</h3>} */}
        {this.state.pageDetails && <MovieDetails pageDetailsUpdate={this.pageDetailsUpdate} currentMovie={this.state.currentMovie} />}
      </main>
    )
  }

}

export default App;
