import React,{ useState, useEffect } from 'react'
import styles from './FullMovie.module.css'
import axios from 'axios'
import loadingimg from '../../images/loading.gif'
import bacimg from '../../images/back.png'
import companyimg from '../../images/office-building.png'
import { format } from 'date-fns'



export default function FullMovie({ setIndex, movieId }) {

  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState({})

  const getMovie = async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=f594e5214f71ed2cde6bdd2ec00f2282`)
    setMovie(data)
    setLoading(false)
  }

  useEffect(() => {
    getMovie()
  },[movieId])

  return (
    <div className={styles.movie_container}>
      {loading?(
        <div className={styles.loading}>
          <img src={loadingimg} alt="Loading" className={styles.loadingimg}/>
        </div>
      ):(
        <div className={styles.movie}>

          <div className={styles.poster}>
            <div className={styles.back}>
              <img src={bacimg} alt="Back" className={styles.back_img} onClick={() => setIndex(0)}/>
            </div>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="Poster"  className={styles.poster_img}/>
          </div>

          <div className={styles.title}>
            <a href={movie.homepage} target="_blank" className={styles.homepage}>{movie.title}</a>
          </div>

          {movie.tagline && <div className={styles.tagline}>{movie.tagline}</div>}

          <div className={styles.genres}>
            {movie.genres.map((genre, index) => <div key={index} className={styles.genre}>{genre.name}</div>)}
          </div>

          <div className={styles.overview}> 
            {movie.overview}
          </div>

          <div className={styles.budget}>
            <div className={styles.prop}>BUDGET</div>
            <div className={styles.value}>${movie.budget.toLocaleString('en-US')}</div>
          </div>

          <div className={styles.budget}>
            <div className={styles.prop}>REVENUE</div>
            <div className={styles.value}>${movie.revenue.toLocaleString('en-US')}</div>
          </div>

          <div className={styles.budget}>
            <div className={styles.prop}>RELEASE DATE</div>
            <div className={styles.value}>{format(new Date(movie.release_date),"MMM d yyyy")}</div>
          </div>

          <div className={styles.budget}>
            <div className={styles.prop}>RUNTIME</div>
            <div className={styles.value}>{movie.runtime} min</div>
          </div>

          <div className={styles.producion_companies}>
            {movie.production_companies.map((company, index) => 
              <div key={index} className={styles.company}>
                <div className={styles.logo}>
                  {company.logo_path?(
                    <img src={`https://image.tmdb.org/t/p/original${company.logo_path}`} alt="Company logo" className={styles.logoimg}/>
                    ):(
                      <img src={companyimg} alt="Placeholder Image" className={styles.userimg}/>
                  )}
                </div>
                <div className={styles.name}>
                  {company.name}
                </div>
              </div>
            )}
          </div>

        </div>
      )}
    </div>
  )
}
