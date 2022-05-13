import React, { Component } from "react"
import '../styles/MovieDetails.scss';

class MovieDetails extends Component {
    // pageDetailsUpdate, currentMovie
    constructor() {
        super();
        this.state = {
            movie: '',
            video: ''
        }
    }

    componentDidMount = () => {
        return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.currentMovie}`)
        .then(response => response.json())
        .then(data => this.setState({movie: data.movie}))
        .catch(err => this.setState({error2: "Something we wrong, Please try again later."}));
    }

    displayDetails = () => {
        console.log("MOVIE", this.state.movie)
        const movieYear = this.state.movie.release_date.substring(0, 4);
        const allGenres = this.state.movie.genres.join(' ');
        const runTime = this.state.movie.runtime;
        // console.log("LOOK HERE", movieYear, allGenres, runTime)


        return (
            <div className='movie-details-container'>
                <img className="backdrop" src={this.state.movie.backdrop_path}/>
                <div className="card-container">
                    <section className="video-container">
                        <iframe 
                            src={`http://www.youtube.com/embed/${this.state.video.key}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        ></iframe>
                    </section>
                    <section className="movie-details">
                        <h2>{this.state.movie.title}</h2><hr className="line"></hr>
                        <div>
                            <img className="poster" src={this.state.movie.poster_path}/>
                            <p className="overview">{this.state.movie.overview}</p>
                        </div>
                        <p className="below-tag">{`${movieYear} `} <span>|</span> {` ${allGenres} `}<span>|</span>  {`${runTime} min `} <span>|</span> {`${this.state.movie.average_rating}`}</p>
                    </section>
                </div>
            </div>
        )
    }
    render = () => {
        return (
            this.displayDetails()
        )
    }
} 
    
export default MovieDetails