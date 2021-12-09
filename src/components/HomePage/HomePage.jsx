import React, { useState } from 'react'
import styles from './HomePage.module.css'
import Sidebar from '../SideBar/Sidebar'
import Movies from '../Movies/Movies'
import TvShows from '../TvShows/TvShows'
import Personalities from '../Personalities/Personalities'

export default function HomePage() {
  const components = [ <Movies/>, <TvShows/>, <Personalities/> ]
  const [ componentIndex, setComponentIndex ] = useState(0)
  return (
    <div className={styles.homepage}>
      <div className={styles.sidebar_container}>
        <Sidebar componentIndex={componentIndex} setComponentIndex={setComponentIndex}/>
      </div>
      <div className={styles.selected_component_container}>
        {components[componentIndex]}
      </div>
    </div>
  )
}
