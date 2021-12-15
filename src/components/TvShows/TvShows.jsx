import React, { useState } from 'react'
import styles from './TvShows.module.css'

//*Tabs
import PopularTvShows from '../PopularTvShows/PopularTvShows'
import TopRatedTvShows from '../TopRatedTvShows/TopRatedTvShows'
import OnTheAir from '../OnTheAir/OnTheAir'
import SearchShows from '../SearchShows/SearchShows'

export default function TvShows() {


  const tabs = [ <PopularTvShows/>, <TopRatedTvShows/>, <OnTheAir/>, <SearchShows/> ];
  const [ tabIndex, setTabIndex ] = useState(0);

  return (
    <div className={styles.movies}>

      <div>
        <div className={styles.tabtitle}>
          Tv Shows
        </div>

        <details>
          <summary>
            Categories
          </summary>
          <div className={styles.tabs}>
            <div className={tabIndex===0?styles.tabactive:styles.tab} onClick={() => {setTabIndex(0)}}>Popular</div>
            <div className={tabIndex===1?styles.tabactive:styles.tab} onClick={() => {setTabIndex(1)}}>Top Rated</div>
            <div className={tabIndex===2?styles.tabactive:styles.tab} onClick={() => {setTabIndex(2)}}>On The Air</div>
            <div className={tabIndex===3?styles.tabactive:styles.tab} onClick={() => {setTabIndex(3)}}>Search</div>
          </div>
        </details>


      </div>
      <div className={styles.content}>
        {tabs[tabIndex]}
      </div>
    </div>
  )
}
