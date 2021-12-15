import React,{ useState, useEffect } from 'react'
import styles from './TvSeason.module.css'
import axios from 'axios'
import loadingimg from '../../images/loading.gif'
import backimg from '../../images/back.png'

export default function TvSeason({ tvId, seasonId, setTabIndex, setEpisodeId }) {

  const [ tvSeason, setTvSeason ] = useState({})
  const [ loading, setLoading ] = useState(true)
  const getSeason = async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}/season/${seasonId}?api_key=f594e5214f71ed2cde6bdd2ec00f2282`)
    setTvSeason(data)
    setLoading(false)
  }

  useEffect(() => {
    getSeason()
  },[])

  return (
    <div>
    {loading?
    <div className={styles.loading}>
      <img src={loadingimg} alt="Loading" className={styles.loadingimg}/>
    </div> : (
      <div className={styles.season}>

        <div className={styles.name}>{tvSeason.name}</div>

        <div className={styles.poster}>
          <img src={`https://image.tmdb.org/t/p/original${tvSeason.poster_path}`} alt="Poster"  className={styles.poster_img} />
          <div className={styles.back}>
            <img src={backimg} alt="Back_Image" className={styles.backimg} onClick={() => setTabIndex(1)} />
          </div>
        </div>

        <div className={styles.overview}>{tvSeason.overview}</div>

        <div className={styles.episodestitle}>Episodes</div>

        <div className={styles.episodes}>
          {tvSeason.episodes.map((episode,index) => <div key={index} className={styles.episode} onClick={() => {setEpisodeId(episode.episode_number); setTabIndex(3)}}>
            <div className={styles.episode_poster}>
              <img 
                src={`https://image.tmdb.org/t/p/original${episode.still_path}`} 
                alt="Poster"  
                className={styles.episode_img} />
            </div>
            <div className={styles.name_and_overview}>
              <div className={styles.episode_name}>{index+1}.{episode.name}</div>
              <div className={styles.episode_overview}>{episode.overview}</div>
            </div>
          </div>)}
        </div>
      </div>
    )}
  </div>
  )
}
