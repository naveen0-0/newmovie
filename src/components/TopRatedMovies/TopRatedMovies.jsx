import React,{ useState, useEffect } from 'react'
import styles from './TopRatedMovies.module.css'
import axios from 'axios'
import loadingimg from '../../images/loading.gif'

export default function TopRatedMovies({ setIndex, setMovieId }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)


  const getPopularMovies = async () => {
    let { data } = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=f594e5214f71ed2cde6bdd2ec00f2282");
    setMovies(data.results)
    setLoading(false)
  }

  useEffect(() => {
    getPopularMovies()
  },[])

  return (
    <div>
      {loading?
      <div className={styles.loading}>
        <img src={loadingimg} alt="Loading" className={styles.loadingimg}/>
      </div> : (
        <div>
          <div className={styles.main_movie} onClick={() => {setIndex(1);setMovieId(movies[0].id)}}>
            <img src={`https://image.tmdb.org/t/p/original${movies[0].backdrop_path}`} alt="Poster"  className={styles.main_movie_img}/>
              <div className={styles.mainTitle}>
                {movies[0].title}
              </div>
          </div>

          <div className={styles.movie_container}>
            {movies.map((movie, index) => {
              if(index!==0){
                return(
                  <div key={index} className={styles.movie} onClick={() => {setIndex(1);setMovieId(movie.id)}} title={movie.title}>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="BackDrop" className={styles.movie_img}/>
                    <div className={styles.smallTitle}>
                      {movie.title}
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </div>
    )}
  </div>
  )
}
