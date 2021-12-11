import React,{ useState, useEffect } from 'react'
import styles from './SearchMovieMovies.module.css'
import axios from 'axios'

export default function SearchMovieMovies({ setIndex, setMovieId }) {

  const [ searchTerm, setSearchTerm ] = useState("");
  const [ results, setResults ] = useState([])

  const getInitialData = async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f594e5214f71ed2cde6bdd2ec00f2282&query=spiderman`)
    setResults(data.results)
  }

  useEffect(() => {
    getInitialData()
  },[])

  const searchMovie = async e => {
    if(e.key === "Enter" && searchTerm.trim()){
      let { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f594e5214f71ed2cde6bdd2ec00f2282&query=${searchTerm}`)
      setResults(data.results)
      setSearchTerm("")
    }
  }

  return (
    <div className={styles.search_movie}>
      <div className={styles.search_movie_input_container}>

        <input 
          type="text" 
          placeholder='Search for a movie' 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value.trim())} 
          onKeyPress={searchMovie}
          className={styles.search_movie_input}
        />

      </div>

      <div className={styles.search_movies}>
        {results.map((movie, index) => 
          <div key={index} className={styles.movie_img_container} onClick={() => {setIndex(1);setMovieId(movie.id)}}>
            {movie.poster_path?(
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Poster" className={styles.movie_img} title={movie.title}/>
              ):(
              <div className={styles.poster_unavailable} title={movie.title}>Poster Unavailable</div>
              )}
          </div>
        )}
      </div>
    </div>
  )
}
