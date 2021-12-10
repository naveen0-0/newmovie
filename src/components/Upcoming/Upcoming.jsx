import React,{ useState, useEffect } from 'react'
import styles from './Upcoming.module.css'

import UpcomingMovies from '../UpcomingMovies/UpcomingMovies'
import FullMovie from '../FullMovie/FullMovie'

export default function Upcoming() {
  const [ index, setIndex ] = useState(0)
  const [ movieId, setMovieId ] = useState(null)
  const components = [ <UpcomingMovies setIndex={setIndex} setMovieId={setMovieId}/>, <FullMovie setIndex={setIndex} movieId={movieId}/> ]

  return (
    <div>
      {components[index]}
    </div>
  )
}
