import React,{ useState, useEffect } from 'react'
import styles from './FullPerson.module.css'
import axios from 'axios'
import backimg from '../../images/back.png'
import loadingimg from '../../images/loading.gif'
import placeholderimg from '../../images/placeholder.png'

export default function FullPerson({ personId, setIndex }) {

  const [ person, setPerson ] = useState({});
  const [ loading1, setLoading1 ] = useState(true);
  const [ loading2, setLoading2 ] = useState(true);
  const [ moviesOrTv , setMoviesOrTv ] = useState('movie_credits');
  const [ medias, setMedias ] = useState([])

  const getPerson = async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/person/${personId}?api_key=f594e5214f71ed2cde6bdd2ec00f2282`);
    setPerson(data);
    setLoading1(false)
  }
  
  const getCredits = async () => {
    setLoading2(true)
    let { data } = await axios.get(`https://api.themoviedb.org/3/person/${personId}/${moviesOrTv}?api_key=f594e5214f71ed2cde6bdd2ec00f2282`);
    setMedias(data.cast)
    setLoading2(false)
  }
  
  useEffect(() => {
    getPerson();
  },[])
  
  useEffect(() => {
    getCredits()
  },[moviesOrTv])

  useEffect(() => {
    let movies = document.getElementById('movies')
    movies.checked = true
  },[])


  return (
    <div className={styles.content}>
      {loading1?(
        <div className={styles.loading}>
          <img src={loadingimg} alt="Loading" className={styles.loadingimg}/>
        </div>
      ):(
        <div className={styles.main}>

          <div className={styles.image_container}>
            <img src={`https://image.tmdb.org/t/p/original${person.profile_path}`} alt="Poster" className={styles.image}/>
            <div className={styles.back} onClick={() => setIndex(0)}>
              <img src={backimg} alt="Back" className={styles.backimg}/>
            </div>
          </div>

          <div className={styles.details}>
            <div className={styles.name}>{person.name}</div>
            <div className={styles.place_of_birth}>{person.place_of_birth}</div>
            <div className={styles.biography}>{person.biography}</div>
          </div>
        </div>)}

        <div className={styles.radio}>
          <input type="radio" className={styles.radio_input} value="movie_credits" name='media' id="movies" onChange={e => setMoviesOrTv(e.target.value)}/>
          <label htmlFor="movies" className={styles.radio_label}>Movies</label>
          
          <input type="radio" className={styles.radio_input} value="tv_credits" name='media' id="tv" onChange={e => setMoviesOrTv(e.target.value)}/>
          <label htmlFor="tv" className={styles.radio_label}>Tv</label>
        </div>
        
        {
          loading2?(
            <div className={styles.loading}>
              <img src={loadingimg} alt="Loading" className={styles.loadingimg}/>
            </div>
          ):(
            <div className={styles.medias}>
              {medias.map((media, index) => <div key={index} className={styles.media}>
                <div className={styles.image_container}>
                  {media.poster_path?(
                    <img src={`https://image.tmdb.org/t/p/original${media.poster_path}`} alt="Poster" className={styles.movie_image}/>
                    ):(
                    <img src={placeholderimg} alt="Poster" className={styles.movie_image}/>
                  )}
                </div>
                <div className={styles.title}>
                  {media.title}
                </div>
              </div>)}
            </div>
          )}


    </div>
  )
}
