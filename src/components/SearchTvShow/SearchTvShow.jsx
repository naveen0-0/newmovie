// import React,{ useState, useEffect } from 'react'
// import styles from './SearchTvShow.module.css'
// import axios from 'axios'
// import loadingimg from '../../images/loading.gif'

// export default function SearchTvShow({ setTvId, setTabIndex }) {

//   const [ tvShows, setTvShows ] = useState([])
//   const [ loading, setLoading ] = useState(true)

//   const getPopularTvShows = async () => {
//     let { data } = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=f594e5214f71ed2cde6bdd2ec00f2282")
//     setTvShows(data.results)
//     setLoading(false)
//   }

//   useEffect(() => {
//     getPopularTvShows()
//   },[])

//   return (
//     <div>
//       {loading?
//       <div className={styles.loading}>
//         <img src={loadingimg} alt="Loading" className={styles.loadingimg}/>
//       </div> : (
//         <div>
//           <div className={styles.main_movie}>
//             <img 
//               src={`https://image.tmdb.org/t/p/original${tvShows[0].backdrop_path}`} 
//               alt="BackDrop"  
//               className={styles.main_movie_img} 
//               title={tvShows[0].name}
//               onClick={() => {setTvId(tvShows[0].id); setTabIndex(1)}}
//             />
//           </div>

//           <div className={styles.movie_container}>
//             {tvShows.map((tvShow, index) => {
//               if(index!==0 && tvShow.poster_path){
//                 return(
//                   <div key={index} className={styles.movie} title={tvShow.name}>
//                     <img 
//                       src={`https://image.tmdb.org/t/p/original${tvShow.poster_path}`} 
//                       alt="Poster" 
//                       className={styles.movie_img}
//                       onClick={() => {setTvId(tvShow.id); setTabIndex(1)}}
//                     />
//                   </div>
//                 )
//               }
//             })}
//           </div>
//         </div>
//     )}
//   </div>
//   )
// }


import React,{ useState, useEffect } from 'react'
import styles from './SearchTvShow.module.css'
import axios from 'axios'

export default function SearchTvShow({  setTvId, setTabIndex  }) {

  const [ searchTerm, setSearchTerm ] = useState("");
  const [ results, setResults ] = useState([])

  const getInitialData = async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=f594e5214f71ed2cde6bdd2ec00f2282&query=bad`)
    setResults(data.results)
  }

  useEffect(() => {
    getInitialData()
  },[])

  const searchMovie = async e => {
    if(e.key === "Enter" && searchTerm.trim()){
      let { data } = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=f594e5214f71ed2cde6bdd2ec00f2282&query=${searchTerm.trim()}`)
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
          onChange={(e) => setSearchTerm(e.target.value)} 
          onKeyPress={searchMovie}
          className={styles.search_movie_input}
        />

      </div>

      <div className={styles.search_movies}>
        {results.map((movie, index) => 
          <div key={index} className={styles.movie_img_container} onClick={() => {setTvId(movie.id); setTabIndex(1)}} title={movie.original_name}>
            {movie.poster_path?(
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Poster" className={styles.movie_img} title={movie.title}/>
              ):(
              <div className={styles.poster_unavailable} title={movie.title}>Poster Unavailable</div>
              )}

              <div className={styles.tvshowname}>{movie.original_name}</div>
          </div>
        )}
      </div>
    </div>
  )
}
