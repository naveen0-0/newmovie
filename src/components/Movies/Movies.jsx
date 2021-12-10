import React, { useState } from 'react'
import styles from './Movies.module.css'

//*Tabs
import NowPlaying from '../NowPlaying/NowPlaying'
import Popular from '../Popular/Popular'
import TopRated from '../TopRated/TopRated'
import Upcoming from '../Upcoming/Upcoming'
import SearchMovie from '../SearchMovie/SearchMovie'

export default function Movies() {

  const tabs = [ <Popular/>, <TopRated/>, <NowPlaying/>, <Upcoming/>, <SearchMovie/> ];
  const [ tabIndex, setTabIndex ] = useState(0);

  return (
    <div className={styles.movies}>

      <div>
        <div className={styles.tabtitle}>
          Movies
        </div>


        <div className={styles.tabs}>
          <div className={tabIndex===0?styles.tabactive:styles.tab} onClick={() => setTabIndex(0)}>Popular</div>
          <div className={tabIndex===1?styles.tabactive:styles.tab} onClick={() => setTabIndex(1)}>Top Rated</div>
          <div className={tabIndex===2?styles.tabactive:styles.tab} onClick={() => setTabIndex(2)}>Now playing</div>
          <div className={tabIndex===3?styles.tabactive:styles.tab} onClick={() => setTabIndex(3)}>Upcoming</div>
          <div className={tabIndex===4?styles.tabactive:styles.tab} onClick={() => setTabIndex(4)}>Search</div>
        </div>
      </div>
      <div className={styles.content}>
        {tabs[tabIndex]}
      </div>
    </div>
  )
}
