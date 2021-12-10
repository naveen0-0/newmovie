import React,{ useState, useEffect } from 'react'
import styles from './SearchMovie.css'
import axios from 'axios'

export default function SearchMovie() {

  const [ searchTerm, setSearchTerm ] = useState("");
  const [ results, setResults ] = useState([])

  const searchMovie = async e => {
    if(e.key === "Enter" && searchTerm.trim()){
      let { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f594e5214f71ed2cde6bdd2ec00f2282&query=${searchTerm}`)
      setResults(data.results)
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
    </div>
  )
}
