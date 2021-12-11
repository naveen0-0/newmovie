import React,{ useState, useEffect } from 'react'
import styles from './SearchMovie.module.css'
import SearchMovieMovies from '../SearchMovieMovies/SearchMovieMovies'
import FullMovie from '../FullMovie/FullMovie'

export default function SearchMovie() {
  const [ index, setIndex ] = useState(0)
  const [ movieId, setMovieId ] = useState(null)
  const components = [ <SearchMovieMovies setIndex={setIndex} setMovieId={setMovieId}/>, <FullMovie setIndex={setIndex} movieId={movieId}/> ]

  return (
    <div>
      {components[index]}
    </div>
  )
}
