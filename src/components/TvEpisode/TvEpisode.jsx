import React,{ useState, useEffect } from 'react'
import styles from './TvEpisode.module.css'
import axios from 'axios'
import loadingimg from '../../images/loading.gif'
import backimg from '../../images/back.png'

export default function TvEpisode({ tvId, seasonId, episodeId, setTabIndex }) {
  const [ tvEpisode, setEpisode ] = useState({})
  const [ loading, setLoading ] = useState(true)

  const getEpisode = async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}/season/${seasonId}/episode/${episodeId}?api_key=f594e5214f71ed2cde6bdd2ec00f2282`);
    setEpisode(data)
    setLoading(false)
  }

  useEffect(() => {
    getEpisode()
  },[])

  return (
    <div>
      {loading?
        <div className={styles.loading}>
          <img src={loadingimg} alt="Loading" className={styles.loadingimg}/>
        </div> : (
      <div className={styles.episode}>

        <div className={styles.poster_and_details}>

          <div className={styles.poster}>
            <img src={`https://image.tmdb.org/t/p/original${tvEpisode.still_path}`} alt="Poster"  className={styles.poster_img} />
          </div>

          <div className={styles.name_and_overview}>
            <div className={styles.name}>{tvEpisode.episode_number}.{tvEpisode.name}</div>
            <div className={styles.overview}>{tvEpisode.overview}</div>
          </div>

          <div className={styles.back}>
            <img src={backimg} alt="Back_Image" className={styles.backimg} onClick={() => setTabIndex(2)} />
          </div>
        </div>

        <div className={styles.crew_title}>Crew</div>
        <div className={styles.crew_members}>
          {tvEpisode.crew.map((crew_member, index) => <div key={index} className={styles.crew_member} onClick={() => console.log(crew_member.id)}>
            <div className={styles.crew_profile_pic}>
              {crew_member.profile_path?(
                <img src={`https://image.tmdb.org/t/p/original${crew_member.profile_path}`} alt="crew_profile_pic"  className={styles.crew_profile_pic_img} />
              ):<div className={styles.no_profile_pic}></div>}
            </div>
            <div className={styles.crew_name}>{crew_member.name || crew_member.original_name}</div>
            <div className={styles.crew_job}>{crew_member.job}</div>
          </div>)}
        </div>


        <div className={styles.crew_title}>Guest Stars</div>
        <div className={styles.crew_members}>
          {tvEpisode.guest_stars.map((crew_member, index) => <div key={index} className={styles.crew_member} onClick={() => console.log(crew_member.id)}>
            <div className={styles.crew_profile_pic}>
              {crew_member.profile_path?(
                <img src={`https://image.tmdb.org/t/p/original${crew_member.profile_path}`} alt="crew_profile_pic"  className={styles.crew_profile_pic_img} />
                ):<div className={styles.no_profile_pic}></div>}
            </div>
            <div className={styles.crew_name}>{crew_member.name || crew_member.original_name}</div>
            <div className={styles.crew_character_title}>character</div>
            <div className={styles.crew_job}>{crew_member.character}</div>
          </div>)}
        </div>


      </div>
    )}
  </div>
  )
}
