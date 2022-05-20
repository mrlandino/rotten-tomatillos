import React, { Component } from "react";
import '../styles/MovieDetails.scss';

class MovieDetails extends Component {
    constructor() {
        super();
        this.state = {
            movie: '',
            video: ''
        }
    }

    componentDidMount = () => {
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.currentMovie}`)
        .then(response => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error("Something went wrong fiding your movie, Please try again later.");
                
            }
        })
        .then(data => this.setState({movie: data.movie}))
        .then(
           fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.currentMovie}/videos`)
            .then(response => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw new Error("Something went wrong finding your video, Please try again later.");
                }
            })
            .then(data => this.setState({video: data.videos[0]}))
        )
        .catch(err => this.props.updateError(err));
    }

    displayDetails = () => {
        const movieYear = this.state.movie.release_date.substring(0, 4);
        let allGenres = [...this.state.movie.genres];
        allGenres.length > 1 && allGenres.splice(2, 5);
        const runTime = this.state.movie.runtime;

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
                        <h2 className="title">{this.state.movie.title}</h2><hr className="line"></hr>
                        <div>
                            <img className="poster" src={this.state.movie.poster_path}/>
                            <p className="overview">{this.state.movie.overview}</p>
                        </div>
                        <p className="below-tag">{`${movieYear} `} <span>|</span> {` ${allGenres.join(' ')} `}<span>|</span>  {`${runTime} min `} <span>|</span> {`${this.state.movie.average_rating.toFixed(1)}`}</p>
                    </section>
                </div>
            </div>
        )

    }

    render = () => {
        return (
            <div>
                {this.state.movie && this.displayDetails()}
            </div>
        )
    }
}

export default MovieDetails
