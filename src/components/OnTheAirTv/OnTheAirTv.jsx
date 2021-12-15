import React,{ useState, useEffect } from 'react'
import styles from './OnTheAirTv.module.css'
import axios from 'axios'
import loadingimg from '../../images/loading.gif'

export default function OnTheAir({ setTvId, setTabIndex }) {

  const [ tvShows, setTvShows ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const getPopularTvShows = async () => {
    let { data } = await axios.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=f594e5214f71ed2cde6bdd2ec00f2282")
    setTvShows(data.results)
    setLoading(false)
  }

  useEffect(() => {
    getPopularTvShows()
  },[])

  return (
    <div>
      {loading?
      <div className={styles.loading}>
        <img src={loadingimg} alt="Loading" className={styles.loadingimg}/>
      </div> : (
        <div>
          <div className={styles.main_movie}>
            <img 
              src={`https://image.tmdb.org/t/p/original${tvShows[0].backdrop_path}`} 
              alt="BackDrop"  
              className={styles.main_movie_img} 
              title={tvShows[0].name}
              onClick={() => {setTvId(tvShows[0].id); setTabIndex(1)}}
            />
          </div>

          <div className={styles.movie_container}>
            {tvShows.map((tvShow, index) => {
              if(index!==0 && tvShow.poster_path){
                return(
                  <div key={index} className={styles.movie} title={tvShow.name}>
                    <img 
                      src={`https://image.tmdb.org/t/p/original${tvShow.poster_path}`} 
                      alt="Poster" 
                      className={styles.movie_img}
                      onClick={() => {setTvId(tvShow.id); setTabIndex(1)}}
                    />
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
