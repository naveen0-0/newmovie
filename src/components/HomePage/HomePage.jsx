import React, { useState } from 'react'
import styles from './HomePage.module.css'
import Sidebar from '../SideBar/Sidebar'
import Movies from '../Movies/Movies'
import TvShows from '../TvShows/TvShows'
import Personalities from '../Personalities/Personalities'
import burgerimg from '../../images/hamburger.png'
import closeimg from '../../images/close.png'

export default function HomePage() {
  const components = [ <Movies/>, <TvShows/>, <Personalities/> ]
  const [ componentIndex, setComponentIndex ] = useState(0);
  const [sidebaractive, setSidebarActive] = useState(false);

  return (
    <div className={styles.homepage}>

      <div className={styles.burger}>
        <img src={burgerimg} alt="HamBurger" className={styles.burgerimg} onClick={() => setSidebarActive(!sidebaractive)}/>
      </div>

      <div className={sidebaractive?styles.sidebar_container_active:styles.sidebar_container}>
        <Sidebar componentIndex={componentIndex} setComponentIndex={setComponentIndex} setSidebarActive={setSidebarActive}/>
      </div>
      
      <div className={styles.selected_component_container}>
        {components[componentIndex]}
      </div>
    </div>
  )
}
