import React, { Component } from "react"
import '../styles/MovieDetails.scss'
import { getMovieDetails, getMovieVideo } from '../apiCalls.js'

class MovieDetails extends Component {
    constructor() {
        super();
        this.state = {
            movie: '',
            video: ''
        }
    }

    componentDidMount = () => {
        getMovieDetails(this.props.currentMovie)
        .then(data => this.dataMovieCleaner(data))
        .then(
            getMovieVideo(this.props.currentMovie)
            .then(data => this.dataVideoCleaner(data))
        )
        .catch(err => this.props.updateError(err))
    }

    dataMovieCleaner = (data) => {
        const updatedData = {
            id: data.movie.id,
            title: data.movie.title,
            poster_path: data.movie.poster_path,
            backdrop_path: data.movie.backdrop_path,
            release_date: data.movie.release_date,
            overview: data.movie.overview,
            genres: data.movie.genres,
            runtime: data.movie.runtime,
            average_rating: data.movie.average_rating
          }

        return this.setState({movie: updatedData})
    }

    dataVideoCleaner = (data) => {
        const updatedData = data.videos.map(video => {
          return {
            key: video.key,
          }
        })

        return this.setState({video: updatedData[0]})
    }

    displayDetails = () => {
        const movieYear = this.state.movie.release_date.substring(0, 4);
        let allGenres = [...this.state.movie.genres];
        allGenres.length > 1 && allGenres.splice(2, 5);
        const runTime = this.state.movie.runtime;

        return (
            <div className='movie-details-container'>
                <img className="backdrop" src={this.state.movie.backdrop_path} alt={`Movie image for "${this.state.movie.title}"`}/>
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
                            <img className="poster" src={this.state.movie.poster_path} alt={`Movie poster for "${this.state.movie.title}"`}/>
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
