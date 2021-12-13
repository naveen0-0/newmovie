import React, { useEffect, useState } from 'react'
import styles from './TvShow.module.css'
import axios from 'axios';
import loadingimg from '../../images/loading.gif'
import backimg from '../../images/back.png'
import { format } from 'date-fns'

export default function TvShow({ tvId, setTabIndex }) {

  const [ tvShow, setTvShow ] = useState({});
  const [ loading, setLoading ] = useState(true)

  const getTvShow =  async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}?api_key=f594e5214f71ed2cde6bdd2ec00f2282`)
    setTvShow(data)
    setLoading(false)
  }

  useEffect(() => {
    getTvShow()
  },[])

  return (
    <div>
      {loading?
      <div className={styles.loading}>
        <img src={loadingimg} alt="Loading" className={styles.loadingimg}/>
      </div> : (
        <div className={styles.tv}>


          <div className={styles.backdrop}>
            <img src={`https://image.tmdb.org/t/p/original${tvShow.backdrop_path}`} alt="BackDrop"  className={styles.backdrop_img} />
            <div className={styles.back}>
              <img src={backimg} alt="Back_Image" className={styles.backimg} onClick={() => setTabIndex(0)} />
            </div>
          </div>

          <div className={styles.name}>
            <a href={tvShow.homepage} target="_blank" className={styles.name_link}>{tvShow.name}</a>
          </div>

          <div className={styles.tagline}>{tvShow.tagline}</div>

          <div className={styles.genres}>
            {tvShow.genres.map((genre,index) => <div key={index} className={styles.genre}>{genre.name}</div>)}
          </div>

          <div className={styles.overview}>
            {tvShow.overview}
          </div>


          <div className={styles.production_companies}>Production Companies</div>

          <div className={styles.prod_comps}>
            {tvShow.production_companies.map((comp, index) => <div key={index} className={styles.prod_comp}>
              <div className={styles.prod_comp_logo_container}>
                <img src={`https://image.tmdb.org/t/p/original${comp.logo_path}`} alt="Company" className={styles.prod_comp_logo} />
              </div>
              <div className={styles.prod_comp_name}>
                {comp.name}
              </div>
            </div>)}
          </div>


          <div className={styles.networks_title}>Networks</div>

          <div className={styles.networks}>
            {tvShow.networks.map((network, index) => <div key={index} className={styles.network}>
              <div className={styles.network_logo_container}>
                <img src={`https://image.tmdb.org/t/p/original${network.logo_path}`} alt="Company" className={styles.network_logo} />
              </div>
              <div className={styles.network_name}>
                {network.name}
              </div>
            </div>)}
          </div>

          <div className={styles.networks_title}>Seasons</div>
          <div className={styles.seasons}>
            {tvShow.seasons.map((season,index) => 
            <div key={index} className={styles.season}>
              <div className={styles.poster_container}>
                <img src={`https://image.tmdb.org/t/p/original${season.poster_path}`} alt="Season Poster" className={styles.poster}/>
              </div>
              <div className={styles.season_name}>
                {season.name}
              </div>
            </div>)}
          </div>

          <div className={styles.networks_title}>Last episode to air</div>

          <div className={styles.last_episode_to_air}>
            <div className={styles.last_episode_img_container}>
              <img src={`https://image.tmdb.org/t/p/original${tvShow.last_episode_to_air.still_path}`} alt="Season Poster" className={styles.last_episode_img}/>
            </div>

            <div className={styles.last_episode_details}>
              <div className={styles.last_episode_details_title}>{`Season ${tvShow.last_episode_to_air.season_number} Episode ${tvShow.last_episode_to_air.episode_number} : ${tvShow.last_episode_to_air.name}`}</div>
              <div className={styles.last_episode_overview}>{tvShow.last_episode_to_air.overview}</div>
              <div className={styles.last_episode_date}>{format(new Date(tvShow.last_episode_to_air.air_date),"MMM d yyyy")}</div>
            </div>
          </div>

        </div>
      )}
    </div>
  )
}
