import React,{ useState, useEffect } from 'react'
import styles from './Popular.module.css'
import PopularMovies from '../PopularMovies/PopularMovies'
import FullMovie from '../FullMovie/FullMovie'

export default function Popular() {
  const [ index, setIndex ] = useState(0)
  const [ movieId, setMovieId ] = useState(null)
  const components = [ <PopularMovies setIndex={setIndex} setMovieId={setMovieId}/>, <FullMovie setIndex={setIndex} movieId={movieId}/> ]

  return (
    <div>
      {components[index]}
    </div>
  )
}
