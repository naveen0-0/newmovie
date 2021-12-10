import React,{ useState, useEffect } from 'react'
import styles from './NowPlaying.module.css'
import NowPlayingMovies from '../NowPlayingMovies/NowPlayingMovies'
import FullMovie from '../FullMovie/FullMovie'

export default function NowPlaying() {
  const [ index, setIndex ] = useState(0)
  const [ movieId, setMovieId ] = useState(null)
  const components = [ <NowPlayingMovies setIndex={setIndex} setMovieId={setMovieId}/>, <FullMovie setIndex={setIndex} movieId={movieId}/> ]

  return (
    <div>
      {components[index]}
    </div>
  )
}

