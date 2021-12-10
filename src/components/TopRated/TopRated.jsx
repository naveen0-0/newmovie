import React,{ useState, useEffect } from 'react'
import styles from './TopRated.module.css'
import TopRatedMovies from '../TopRatedMovies/TopRatedMovies'
import FullMovie from '../FullMovie/FullMovie'

export default function TopRated() {
  const [ index, setIndex ] = useState(0)
  const [ movieId, setMovieId ] = useState(null)
  const components = [ <TopRatedMovies setIndex={setIndex} setMovieId={setMovieId}/>, <FullMovie setIndex={setIndex} movieId={movieId}/> ]

  return (
    <div>
      {components[index]}
    </div>
  )
}

