const getMovies = () => {
    return (
        fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
            .then(response => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error();
            }
        }) 
    )
}

const getMovieDetails = (movie) => {
   return (
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movie}`)
            .then(response => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error("Something went wrong fiding your movie, Please try again later.");
            }
        })
   )
}

const getMovieVideo = (movie) => {
    return (
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movie}/videos`)
            .then(response => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw new Error("Something went wrong finding your video, Please try again later.");
                }
        })
    )
}

export { getMovies, getMovieDetails, getMovieVideo }