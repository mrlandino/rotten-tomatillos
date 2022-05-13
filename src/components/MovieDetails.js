import React, { Component } from "react"
import { movieData } from "./movieData"

class MovieDetails extends Component {
    constructor() {
        super();
        this.state = {
            movie: movieData.movie,
            video: movieData.videos[0]
        }
    }
    //we have access to props.pageDetailsUpdate
    //and props.currentMovie
    displayDetails = () => {
        const movieYear = this.state.movie.release_date.substring(0, 4);
        const allGenres = this.state.movie.genres.join(' ');
        const runTime = this.state.movie.runtime;
        console.log("LOOK HERE", movieYear, allGenres, runTime)


        return (
            <div className='movie-details-container'>
                <section className="video-container">
                    <iframe source={`http://www.youtube.com/embed/${this.state.video.key}`}
                    width="560" height="315" frameborder="0" allowfullscreen></iframe>
                </section>
                <section className="movie-details">
                    <h2>{this.state.movie.title}</h2>
                    <div>
                        <img src={this.state.movie.poster_path}/>
                        <p>{this.state.movie.overview}</p>
                    </div>
                    <p>{`${movieYear} | ${allGenres} | ${runTime} min | ${this.state.movie.average_rating}`}</p>
                </section>
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