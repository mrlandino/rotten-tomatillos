import React, { Component } from "react"
import Nav from "./Nav"
import Movies from "./Movies"
import MovieDetails from "./MovieDetails"
import { movieData } from "./movieData"
import '../styles/App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: '',
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => this.setState({movies: data.movies}))
    .catch(err => this.setState({error: "Something went wrong, Please try again later."}))
  }

  render = () => {
    return (
      <main className="main-content">
        {this.state.error && <Redirect to="/error" />}
        <Route path="/" render= {() => <Nav /> } />
        <Route exact path="/error" render= {() => <h3 className='error'>{this.state.error}</h3>} />
        <Route exact path="/" render={() => <Movies movies={this.state.movies} getMovie={this.getMovie}/>} />
        <Route exact path='/:id' render={({ match }) => {
          return <MovieDetails currentMovie={match.params.id}/>
        }}
        />
      </main>
    )
  }

}

export default App;
