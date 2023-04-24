import React from 'react'
import Movie from './moviecard'

const MovieList = ({movies}) => {
  return (
    <div><div>
      {movies.map((movie,index)=> <Movie movie={movie} />)}
    </div></div>
    
  )
}

export default MovieList
