import React from 'react'
import styles from './Sidebar.module.css'
import dashboardimg from '../../images/dashboard.png'
import barimg from '../../images/bar.png'
import graphimg from '../../images/graph.png'



export default function Sidebar({ componentIndex, setComponentIndex }) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.apptitle}>
        Mynori
      </div>
      <div className={styles.sidebarlinks}>
        <div className={styles.sidebarlink} >
          <div>
            <img src={dashboardimg} alt="Dashboard"/>
          </div>
          <div className={componentIndex === 0 ? styles.sidebarlinktextactive : styles.sidebarlinktext} onClick={()=>{setComponentIndex(0)}}>
            Movies
          </div>
        </div>


        <div className={styles.sidebarlink} >
          <div>
            <img src={barimg} alt="Market Cap"/>
          </div>
          <div className={componentIndex === 1 ? styles.sidebarlinktextactive : styles.sidebarlinktext} onClick={()=>{setComponentIndex(1)}}>
            Tv shows
          </div>
        </div>


        <div className={styles.sidebarlink} >
          <div>
            <img src={graphimg} alt="Compare"/>
          </div>
          <div className={componentIndex === 2 ? styles.sidebarlinktextactive : styles.sidebarlinktext} onClick={()=>{setComponentIndex(2)}}>
            People
          </div>
        </div>

      </div>
    </div>
  )
}
