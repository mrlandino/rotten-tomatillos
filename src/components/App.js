import React, { Component } from "react"
import Nav from "./Nav"
import Movies from "./Movies"
import MovieDetails from "./MovieDetails"
import '../styles/App.scss'
import { Route, Redirect } from 'react-router-dom'
import { getMovies } from '../apiCalls.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: false,
    }
  }

  dataCleaner = (data) => {
    const updatedData = data.movies.map(movie => {
      return {
        id: movie.id,
        poster_path: movie.poster_path,
        title: movie.title
      }
    })
    
    return this.setState({movies: updatedData})
  }

  componentDidMount = () => {
    getMovies()
    .then(data => this.dataCleaner(data))
    .catch(err => this.setState({error: true}))
  }

  updateError = (err) => {
    console.log(err)
    this.setState({error: true})
  }

  render = () => {
    return (
      <main className="main-content">
        {this.state.error && <Redirect to="/error" />}
        <Route path="/" render= {() => <Nav /> } />
        <Route exact path="/error" render= {() => <h3 className='error'>Something went wrong, Please try again later.</h3>} />
        <Route exact path="/" render={() => <Movies movies={this.state.movies} getMovie={this.getMovie}/>} />
        <Route exact path='/:id' render={({ match }) => {
          return <MovieDetails currentMovie={match.params.id} updateError={this.updateError}/>
        }}
        />
      </main>
    )
  }
}

export default App;
