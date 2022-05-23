const dataCleaner = (data) => {
    const updatedData = data.movies.map(movie => {
      return {
        id: movie.id,
        poster_path: movie.poster_path,
        title: movie.title
      }
    })
    
    return {movies: updatedData}
  }

  const dataMovieCleaner = (data) => {
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

    return {movie: updatedData};
}

const dataVideoCleaner = (data) => {
    const updatedData = data.videos.map(video => {
      return {
        key: video.key,
      }
    })

    return {video: updatedData[0]}
}

export { dataCleaner, dataVideoCleaner, dataMovieCleaner }