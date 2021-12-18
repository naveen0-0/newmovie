import React,{ useState, useEffect } from 'react'
import styles from './PersonalitiesPeople.module.css'
import axios from 'axios';
import userimg from '../../images/user.png'
import loadingimg from '../../images/loading.gif'

export default function PersonalitiesPeople({ setIndex, setPersonId }) {
  const [ people, setPeople ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ searchTerm, setSearchTerm ] = useState("")

  const getInitialData = async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=f594e5214f71ed2cde6bdd2ec00f2282&query=ryan`)
    setPeople(data.results)
    setLoading(false)
  }
  
  const searchForAPerson = async e => {
    if(e.key === "Enter" && searchTerm.trim()){
      setLoading(true)
      let { data } = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=f594e5214f71ed2cde6bdd2ec00f2282&query=${searchTerm.trim()}`)
      setPeople(data.results)
      setLoading(false)
      setSearchTerm("")
    }
  }

  useEffect(() => {
    getInitialData()
  },[])

  return (
    <div className={styles.content}>
      {loading?(
        <div className={styles.loading}>
          <img src={loadingimg} alt="Loading" className={styles.loadingimg}/>
        </div>
      ):(
        <div>
            <div className={styles.search_bar_container}>
              <input 
                type="text" 
                placeholder='Search for anyone' 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                onKeyPress={searchForAPerson}
                className={styles.search_bar}
              />
            </div>
            <div className={styles.persons}>
              {people.map((person,index) => <div key={index} className={styles.person}>
                <div className={styles.profile} onClick={() => {setIndex(1);setPersonId(person.id)}}>
                  {person.profile_path?(
                    <img src={`https://image.tmdb.org/t/p/original${person.profile_path}`} alt="Profile_image" className={styles.profile_img}/>
                    ):(
                    <img src={userimg} alt="Profile_image" className={styles.user_img}/>  
                  )}
                </div>
                <div className={styles.name}>{person.name}</div>
              </div>)}
            </div>

          </div>
      )}
    </div>
  )
}
